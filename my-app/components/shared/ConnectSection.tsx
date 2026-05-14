"use client";

import { useState, useRef } from "react";

export type ConnectSectionVariant = "default" | "contacts";

type ConnectSectionProps = {
  variant?: ConnectSectionVariant;
};

type FormState = "idle" | "submitting" | "success" | "error";

/** Matches Webflow `contacts-form-block _w-35` — gradient card, bordered inputs, pill-region submit. */
function ConnectFormCard({ className = "" }: { className?: string }) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  // Field-level validation errors
  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  // ── Client-side validation ────────────────────────────────────────────────
  function validate(name: string, email: string, message: string) {
    const errors: { name?: string; email?: string; message?: string } = {};
    if (name.trim().length < 2) errors.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      errors.email = "Please enter a valid email address.";
    if (message.trim().length < 10)
      errors.message = "Message must be at least 10 characters.";
    return errors;
  }

  // ── Submit handler ────────────────────────────────────────────────────────
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const name = nameRef.current?.value ?? "";
    const email = emailRef.current?.value ?? "";
    const message = messageRef.current?.value ?? "";

    const errors = validate(name, email, message);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setFormState("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data?.error ?? "Something went wrong. Please try again.");
        setFormState("error");
        return;
      }

      // Reset the form on success
      if (nameRef.current) nameRef.current.value = "";
      if (emailRef.current) emailRef.current.value = "";
      if (messageRef.current) messageRef.current.value = "";

      setFormState("success");
    } catch {
      setErrorMsg("Network error — please check your connection and try again.");
      setFormState("error");
    }
  }

  const isSubmitting = formState === "submitting";

  const inputClass =
    "contacts-input block h-[2.6875rem] w-full rounded border border-white bg-transparent " +
    "px-[1.125rem] py-3 text-sm leading-none text-white caret-white placeholder:text-white/75 " +
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 " +
    "focus-visible:outline-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity";

  return (
    <div
      className={
        "contacts-form-block _w-35 flex min-h-0 min-w-0 w-full max-w-[37.84375rem] shrink-0 flex-col rounded-2xl " +
        "bg-[linear-gradient(113deg,rgb(96,215,173)_11%,rgb(33,60,58)_76%)] " +
        "p-7 text-base font-normal leading-none text-[#4c4c4e] sm:p-8 lg:min-h-[30rem] lg:p-10 " +
        className
      }
    >
      <h2 className="main-heading getin-tocuh mb-8 text-left text-[2.5rem] font-semibold capitalize leading-[3.5rem] tracking-[-0.05rem] text-white">
        Get In Touch today!
      </h2>

      <div className="form-block-contacts w-full">
        {/* ── Success state ─────────────────────────────────────────────── */}
        {formState === "success" ? (
          <div className="flex flex-col items-start gap-4 py-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7 text-white"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="text-xl font-semibold text-white">
              Message received!
            </p>
            <p className="text-sm leading-relaxed text-white/80">
              Thanks for reaching out. One of our experts will get back to you
              within 1–2 business days.
            </p>
            <button
              type="button"
              onClick={() => setFormState("idle")}
              className="mt-2 rounded-lg border border-white/40 bg-white/10 px-5 py-2 text-sm font-medium text-white hover:bg-white/20 transition-colors"
            >
              Send another message
            </button>
          </div>
        ) : (
          /* ── Form ──────────────────────────────────────────────────────── */
          <form
            id="email-form"
            className="form-contacts flex min-h-0 w-full flex-col justify-between lg:min-h-[25.5rem]"
            aria-label="Contact Form"
            name="email-form"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="flex w-full flex-col gap-4">
              {/* Name */}
              <div className="flex flex-col gap-1">
                <input
                  ref={nameRef}
                  id="name-3"
                  className={`${inputClass}${fieldErrors.name ? " border-red-300" : ""}`}
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  autoComplete="name"
                  disabled={isSubmitting}
                  aria-invalid={!!fieldErrors.name}
                  aria-describedby={fieldErrors.name ? "name-error" : undefined}
                />
                {fieldErrors.name && (
                  <p id="name-error" className="text-xs text-red-200 pl-1">
                    {fieldErrors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <input
                  ref={emailRef}
                  id="email-2"
                  className={`${inputClass}${fieldErrors.email ? " border-red-300" : ""}`}
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  autoComplete="email"
                  disabled={isSubmitting}
                  aria-invalid={!!fieldErrors.email}
                  aria-describedby={
                    fieldErrors.email ? "email-error" : undefined
                  }
                />
                {fieldErrors.email && (
                  <p id="email-error" className="text-xs text-red-200 pl-1">
                    {fieldErrors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <textarea
                  ref={messageRef}
                  id="field-2"
                  className={
                    "contacts-textarea contacts-input mb-[1.875rem] block min-h-[10rem] w-full min-w-full max-w-full " +
                    "resize-y rounded border border-white bg-transparent px-[1.125rem] py-3 text-sm leading-none " +
                    "text-white caret-white placeholder:text-white/75 focus-visible:outline focus-visible:outline-2 " +
                    "focus-visible:outline-offset-2 focus-visible:outline-white/90 whitespace-pre-wrap " +
                    "[max-height:min(40vh,24rem)] disabled:opacity-50 disabled:cursor-not-allowed transition-opacity" +
                    (fieldErrors.message ? " border-red-300" : "")
                  }
                  placeholder="Your Message"
                  name="message"
                  disabled={isSubmitting}
                  aria-invalid={!!fieldErrors.message}
                  aria-describedby={
                    fieldErrors.message ? "message-error" : undefined
                  }
                />
                {fieldErrors.message && (
                  <p id="message-error" className="text-xs text-red-200 pl-1">
                    {fieldErrors.message}
                  </p>
                )}
              </div>
            </div>

            {/* Global error banner */}
            {formState === "error" && errorMsg && (
              <p
                role="alert"
                className="mb-4 rounded-lg bg-red-500/20 border border-red-300/40 px-4 py-2 text-sm text-red-100"
              >
                {errorMsg}
              </p>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={
                "secondary-button submit flex h-12 cursor-pointer items-center gap-2 self-start rounded-lg " +
                "border border-[#4dac8a] bg-[#4dac8a] px-6 text-center text-base font-medium leading-6 text-white " +
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/90 " +
                "hover:bg-[#3d9a7a] hover:border-[#3d9a7a] transition-colors " +
                "disabled:opacity-60 disabled:cursor-not-allowed"
              }
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="h-4 w-4 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Sending…
                </>
              ) : (
                "Submit Request"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function ConnectSection({
  variant = "default",
}: ConnectSectionProps) {
  const isContacts = variant === "contacts";

  return (
    <section className={`section-25 py-100${isContacts ? " section-25--contacts" : ""}`}>
      <div
        className={
          isContacts
            ? "mx-auto w-full max-w-[110rem] px-4 sm:px-[0.9375rem]"
            : "mx-auto w-full max-w-[1350px] px-6"
        }
      >
        <div
          className={
            isContacts
              ? "grid w-full min-w-0 grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,37.84375rem)] lg:items-stretch lg:gap-8 xl:gap-12 2xl:gap-16"
              : "connect-shell"
          }
        >
          {isContacts ? (
            <div className="connect-left-pane order-1 flex min-h-0 min-w-0 w-full max-w-full flex-col justify-center max-lg:justify-start lg:min-h-0 lg:pr-2 xl:pr-4">
              <h2 className="mt-0 w-full max-w-[59.5rem] text-left text-[1.75rem] font-semibold capitalize leading-snug tracking-[-0.05rem] text-white sm:text-[2rem] sm:leading-tight md:text-[2.25rem] lg:mt-1 lg:text-[2.5rem] lg:leading-[3.5rem]">
                Let&apos;s Connect what we can collaborate, Build, and Scale
                Together
              </h2>
            </div>
          ) : (
            <div className="connect-left-pane">
              <h2 className="heading-28 max-w-[59.46875rem]">
                Let&apos;s Connect what we can collaborate, Build, and Scale
                Together
              </h2>
            </div>
          )}

          <ConnectFormCard
            className={
              isContacts
                ? "order-2 w-full min-w-0"
                : "w-full min-w-0 justify-self-end"
            }
          />
        </div>
      </div>
    </section>
  );
}
