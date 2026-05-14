import { NextRequest, NextResponse } from "next/server";
import { writeClient } from "@/sanity/lib/writeClient";

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

    // ── Write to Sanity ───────────────────────────────────────────────────────
    const doc = await writeClient.create({
      _type: "contactSubmission",
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      submittedAt: new Date().toISOString(),
      status: "new",
    });

    return NextResponse.json({ success: true, id: doc._id }, { status: 201 });
  } catch (err) {
    console.error("[/api/contact] Error saving submission:", err);

    // If the write token is missing we get a 401 from Sanity
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
