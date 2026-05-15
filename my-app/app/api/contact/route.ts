import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { writeClient } from "@/sanity/lib/writeClient";

const resend = new Resend(process.env.RESEND_API_KEY);

// ── Email sender address ──────────────────────────────────────────────────────
// This requires heaptrace.com to be verified in the Resend dashboard (Domains tab).
const FROM_ADDRESS = "Heaptrace <hello@heaptrace.com>";

// ── Your internal notification inbox ─────────────────────────────────────────
const NOTIFY_TO = process.env.CONTACT_TO_EMAIL ?? "varulv@heaptrace.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

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

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanMessage = message.trim();
    const submittedAt = new Date().toISOString();

    // ── Write to Sanity ───────────────────────────────────────────────────────
    const doc = await writeClient.create({
      _type: "contactSubmission",
      name: cleanName,
      email: cleanEmail,
      message: cleanMessage,
      submittedAt,
      status: "new",
    });

    // ── Send emails via Resend ────────────────────────────────────────────────
    // Emails are non-fatal — Sanity record is already saved above.
    // Using { data, error } SDK pattern per official Resend docs (no try/catch).
    if (process.env.RESEND_API_KEY) {
      const date = new Date(submittedAt).toLocaleString("en-US", {
        dateStyle: "long",
        timeStyle: "short",
      });

      // 1. Internal notification to the Heaptrace team
      const notifyHtml = `
        <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;padding:32px 24px;background:#0d0d0d;color:#e5e5e5;border-radius:12px;">
          <div style="margin-bottom:24px;">
            <span style="display:inline-block;background:#60d7ad;color:#0d2e28;font-size:11px;font-weight:700;letter-spacing:0.08em;padding:4px 10px;border-radius:99px;text-transform:uppercase;">New Contact</span>
          </div>
          <h1 style="margin:0 0 8px;font-size:22px;font-weight:700;color:#ffffff;">You've got a new message</h1>
          <p style="margin:0 0 24px;font-size:14px;color:#9ca3af;">Received on ${date}</p>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tr><td style="padding:10px 0;border-bottom:1px solid #1f1f1f;font-size:13px;color:#9ca3af;width:90px;">Name</td><td style="padding:10px 0;border-bottom:1px solid #1f1f1f;font-size:14px;font-weight:600;color:#ffffff;">${cleanName}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #1f1f1f;font-size:13px;color:#9ca3af;">Email</td><td style="padding:10px 0;border-bottom:1px solid #1f1f1f;font-size:14px;color:#60d7ad;"><a href="mailto:${cleanEmail}" style="color:#60d7ad;text-decoration:none;">${cleanEmail}</a></td></tr>
            <tr><td style="padding:10px 0;font-size:13px;color:#9ca3af;vertical-align:top;">Message</td><td style="padding:10px 0;font-size:14px;color:#e5e5e5;white-space:pre-wrap;">${cleanMessage}</td></tr>
          </table>
          <a href="https://heaptrace.sanity.studio/structure/contactSubmission;${doc._id}" style="display:inline-block;background:#60d7ad;color:#0d2e28;font-size:14px;font-weight:600;padding:10px 20px;border-radius:8px;text-decoration:none;">View in Sanity Studio →</a>
          <p style="margin:32px 0 0;font-size:12px;color:#6b7280;">Heaptrace · Contact Form Notification</p>
        </div>`;

      // 2. Auto-reply to the person who submitted
      const replyHtml = `
        <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;padding:32px 24px;background:#0d0d0d;color:#e5e5e5;border-radius:12px;">
          <div style="margin-bottom:24px;">
            <img src="https://heaptrace.com/favicon.ico" alt="Heaptrace" width="32" height="32" style="display:block;" />
          </div>
          <h1 style="margin:0 0 12px;font-size:22px;font-weight:700;color:#ffffff;">Thanks for reaching out, ${cleanName}!</h1>
          <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#d1d5db;">
            We've received your message and a member of our team will get back to you within <strong style="color:#ffffff;">1–2 business days</strong>.
          </p>
          <div style="background:#1a1a1a;border:1px solid #2a2a2a;border-radius:10px;padding:20px;margin-bottom:28px;">
            <p style="margin:0 0 8px;font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#9ca3af;">Your message</p>
            <p style="margin:0;font-size:14px;line-height:1.7;color:#e5e5e5;white-space:pre-wrap;">${cleanMessage}</p>
          </div>
          <p style="margin:0 0 28px;font-size:14px;line-height:1.7;color:#9ca3af;">
            In the meantime, feel free to explore what we build at <a href="https://heaptrace.com" style="color:#60d7ad;text-decoration:none;">heaptrace.com</a>.
          </p>
          <p style="margin:0;font-size:13px;color:#6b7280;">— The Heaptrace Team</p>
        </div>`;

      // Fire both emails in parallel using the { data, error } SDK pattern
      const [notifyResult, replyResult] = await Promise.all([
        resend.emails.send({
          from: FROM_ADDRESS,
          to: [NOTIFY_TO],
          replyTo: cleanEmail,
          subject: `New contact from ${cleanName}`,
          html: notifyHtml,
          idempotencyKey: `contact-notify/${doc._id}`,
          tags: [{ name: "type", value: "contact-notification" }],
        }),
        resend.emails.send({
          from: FROM_ADDRESS,
          to: [cleanEmail],
          subject: "We got your message — Heaptrace",
          html: replyHtml,
          idempotencyKey: `contact-reply/${doc._id}`,
          tags: [{ name: "type", value: "contact-autoreply" }],
        }),
      ]);

      if (notifyResult.error) {
        console.error("[/api/contact] Notification email failed:", notifyResult.error);
      } else {
        console.log("[/api/contact] Notification sent:", notifyResult.data?.id);
      }

      if (replyResult.error) {
        console.error("[/api/contact] Auto-reply email failed:", replyResult.error);
      } else {
        console.log("[/api/contact] Auto-reply sent:", replyResult.data?.id);
      }
    } else {
      console.warn("[/api/contact] RESEND_API_KEY not set — skipping email sends.");
    }

    return NextResponse.json({ success: true, id: doc._id }, { status: 201 });
  } catch (err) {
    // try/catch covers only Sanity write failures and JSON parse errors
    console.error("[/api/contact] Error saving submission:", err);

    if (err instanceof Error && err.message.includes("Unauthorized")) {
      return NextResponse.json(
        { error: "Server configuration error — write token not set." },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 },
    );
  }
}

// Reject every other HTTP method cleanly
export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
