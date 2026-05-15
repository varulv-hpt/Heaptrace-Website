import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { writeClient } from "@/sanity/lib/writeClient";

const resend = new Resend(process.env.RESEND_API_KEY || "");
const resendDomain = process.env.RESEND_DOMAIN || "heaptrace.com";
const resendFromName = process.env.RESEND_FROM_NAME || "Heaptrace";
const contactRecipient = process.env.CONTACT_TO_EMAIL || "varulv@heaptrace.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, message } = body;

    // ── Basic server-side validation ──────────────────────────────────────────
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please provide a message (at least 10 characters)." },
        { status: 400 },
      );
    }

    if (!process.env.SANITY_API_TOKEN || !writeClient) {
      return NextResponse.json(
        {
          error:
            "Sanity write token is not configured. Set SANITY_API_TOKEN in .env.local.",
        },
        { status: 500 },
      );
    }

    // ── Write to Sanity ───────────────────────────────────────────────────────
    const doc = await writeClient.create({
      _type: "contactSubmission",
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company ? company.trim() : undefined,
      message: message.trim(),
      submittedAt: new Date().toISOString(),
      status: "new",
    });

    let emailSent = false;
    let emailErrorMessage: string | null = null;

    if (!process.env.RESEND_API_KEY) {
      emailErrorMessage = "RESEND_API_KEY is not configured.";
      console.error("[/api/contact]", emailErrorMessage);
    } else {
      try {
        await resend.emails.send({
          from: `${resendFromName} <${resendFromName.replace(/\s+/g, "").toLowerCase()}@${resendDomain}>`,
          to: [contactRecipient],
          subject: `New contact submission from ${doc.name}`,
          text: `New contact submission received:\n\nName: ${doc.name}\nEmail: ${doc.email}\nCompany: ${doc.company || "Not provided"}\nMessage: ${doc.message}\nSubmitted At: ${doc.submittedAt}`,
        });
        emailSent = true;
      } catch (emailError) {
        emailErrorMessage =
          emailError instanceof Error
            ? emailError.message
            : "Unknown error while sending email.";
        console.error("[/api/contact] Resend email failed:", emailError);
      }
    }

    return NextResponse.json(
      {
        success: true,
        id: doc._id,
        emailSent,
        emailError: emailErrorMessage,
      },
      { status: 201 },
    );
  } catch (err) {
    console.error("[/api/contact] Error saving submission:", err);

    if (err instanceof Error && err.message.includes("Unauthorized")) {
      return NextResponse.json(
        { error: "Server configuration error — write token not set." },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { error: `Something went wrong: ${err instanceof Error ? err.message : 'Unknown error'}. Please try again later.` },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
