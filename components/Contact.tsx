"use client";

import { useState } from "react";
import { CONTACT } from "@/lib/data";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[22px] w-[22px] text-gold">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[22px] w-[22px] text-gold">
      <path
        d="M5 4 L9 4 L10.5 9 L8 10.5 C9 13.5 10.5 15 13.5 16 L15 13.5 L20 15 L20 19 C20 20 19 21 18 20.5 C11 18.5 5.5 13 3.5 6 C3.2 5 4 4 5 4 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[22px] w-[22px] text-gold">
      <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M4 7 L12 13 L20 7" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

const inputClasses =
  "border border-ivory/25 bg-ivory/5 px-4 py-3.5 font-light text-ivory placeholder:text-ivory/40 transition-colors focus:border-gold focus:outline-none";

const labelClasses =
  "grid gap-1.5 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ivory/75";

export default function Contact() {
  const [note, setNote] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    if (!name) {
      setNote("Please tell me your name so I know who I'm writing back to.");
      (e.currentTarget.elements.namedItem("name") as HTMLInputElement)?.focus();
      return;
    }
    const subject = `Wedding styling enquiry — ${name}`;
    const body = [
      `Name: ${name}`,
      `Wedding date: ${data.get("date") || "—"}`,
      `City: ${data.get("city") || "—"}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setNote("Opening your mail app — I'll reply within two days.");
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-peepal-deep to-peepal py-[clamp(4.5rem,10vw,8rem)]"
    >
      <div className="mx-auto max-w-[1180px] px-5 sm:px-10">
        <h2 className="reveal text-center text-[clamp(2rem,4.6vw,3.2rem)] !text-ivory">
          Let&rsquo;s create beautiful
          <br />
          weddings together.
        </h2>

        <div className="reveal d1 my-10 flex flex-wrap justify-center gap-x-[clamp(1.5rem,5vw,3.5rem)] gap-y-5">
          <a
            href={`https://instagram.com/${CONTACT.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[0.95rem] tracking-wide text-ivory/90 no-underline transition-colors hover:text-haldi"
          >
            <InstagramIcon />@{CONTACT.instagram}
          </a>
          <a
            href={`tel:${CONTACT.phoneHref}`}
            className="inline-flex items-center gap-3 text-[0.95rem] tracking-wide text-ivory/90 no-underline transition-colors hover:text-haldi"
          >
            <PhoneIcon />
            {CONTACT.phone}
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center gap-3 text-[0.95rem] tracking-wide text-ivory/90 no-underline transition-colors hover:text-haldi"
          >
            <MailIcon />
            {CONTACT.email}
          </a>
        </div>

        <form className="reveal d2 mx-auto grid max-w-[620px] gap-4" onSubmit={onSubmit} noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className={labelClasses}>
              Name
              <input type="text" name="name" required autoComplete="name" placeholder="Your name" className={inputClasses} />
            </label>
            <label className={labelClasses}>
              Wedding Date
              <input type="date" name="date" className={inputClasses} />
            </label>
          </div>
          <label className={labelClasses}>
            City
            <input type="text" name="city" autoComplete="address-level2" placeholder="Where's the wedding?" className={inputClasses} />
          </label>
          <label className={labelClasses}>
            Message
            <textarea name="message" rows={4} placeholder="Tell me a little about your wedding…" className={inputClasses} />
          </label>
          <button
            type="submit"
            className="btn mt-2 justify-self-center border-gold bg-gold text-ivory hover:border-gold-dark hover:bg-gold-dark"
          >
            Send Enquiry
          </button>
          <p className="min-h-[1.4em] text-center text-[0.85rem] text-haldi" role="status">
            {note}
          </p>
        </form>
      </div>
    </section>
  );
}
