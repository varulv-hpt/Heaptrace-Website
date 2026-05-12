export type ConnectSectionVariant = "default" | "contacts";

type ConnectSectionProps = {
  variant?: ConnectSectionVariant;
};

/** Matches Webflow `contacts-form-block _w-35` — gradient card, bordered inputs, pill-region submit. */
function ConnectFormCard({ className = "" }: { className?: string }) {
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
        <form
          id="email-form"
          className="form-contacts flex min-h-0 w-full flex-col justify-between lg:min-h-[25.5rem]"
          aria-label="Email Form"
          name="email-form"
          method="get"
          action="/contact-us"
        >
          <div className="flex w-full flex-col gap-4">
            <input
              id="name-3"
              className={
                "contacts-input block h-[2.6875rem] w-full rounded border border-white bg-transparent " +
                "px-[1.125rem] py-3 text-sm leading-none text-white caret-white placeholder:text-white/75 " +
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 " +
                "focus-visible:outline-white/90"
              }
              type="text"
              placeholder="Your Name"
              name="name-3"
              autoComplete="name"
            />
            <input
              id="email-2"
              className={
                "contacts-input block h-[2.6875rem] w-full rounded border border-white bg-transparent " +
                "px-[1.125rem] py-3 text-sm leading-none text-white caret-white placeholder:text-white/75 " +
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 " +
                "focus-visible:outline-white/90"
              }
              type="email"
              placeholder="Your Email"
              name="email-2"
              autoComplete="email"
            />
            <textarea
              id="field-2"
              className={
                "contacts-textarea contacts-input mb-[1.875rem] block min-h-[10rem] w-full min-w-full max-w-full " +
                "resize-y rounded border border-white bg-transparent px-[1.125rem] py-3 text-sm leading-none " +
                "text-white caret-white placeholder:text-white/75 focus-visible:outline focus-visible:outline-2 " +
                "focus-visible:outline-offset-2 focus-visible:outline-white/90 whitespace-pre-wrap " +
                "[max-height:min(40vh,24rem)]"
              }
              placeholder="Your Message"
              name="field-2"
            />
          </div>
          <input
            className={
              "secondary-button submit block h-12 cursor-pointer self-start rounded-lg border border-[#4dac8a] " +
              "bg-[#4dac8a] px-6 text-center text-base font-medium leading-6 text-white " +
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/90"
            }
            type="submit"
            value="Submit Request"
          />
        </form>
      </div>
    </div>
  );
}

export default function ConnectSection({ variant = "default" }: ConnectSectionProps) {
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
                Let&apos;s Connect what we can collaborate, Build, and Scale Together
              </h2>
            </div>
          ) : (
            <div className="connect-left-pane">
              <h2 className="heading-28 max-w-[59.46875rem]">
                Let&apos;s Connect what we can collaborate, Build, and Scale Together
              </h2>
            </div>
          )}

          <ConnectFormCard className={isContacts ? "order-2 w-full min-w-0" : "w-full min-w-0 justify-self-end"} />
        </div>
      </div>
    </section>
  );
}
