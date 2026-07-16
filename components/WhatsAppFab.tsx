import { CONTACT } from "@/lib/data";

export default function WhatsAppFab() {
  const href = `https://wa.me/${CONTACT.phoneHref.replace("+", "")}?text=${encodeURIComponent(CONTACT.whatsappText)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full border border-gold bg-peepal-deep shadow-[0_10px_24px_-10px_rgba(47,71,55,0.6)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_-12px_rgba(47,71,55,0.7)]"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 text-champagne">
        <path
          d="M12 3 A9 9 0 0 0 4.2 16.5 L3.2 20.8 L7.6 19.8 A9 9 0 1 0 12 3 Z M8.8 7.8 C9 7.3 9.4 7.3 9.7 7.3 C10 7.3 10.2 7.3 10.4 7.8 C10.6 8.3 11 9.3 11.1 9.5 C11.2 9.7 11.2 9.9 11 10.1 C10.7 10.5 10.5 10.7 10.7 11 C11 11.6 12 12.7 13.1 13.2 C13.5 13.4 13.7 13.4 13.9 13.1 C14.1 12.9 14.4 12.5 14.6 12.3 C14.8 12.1 15 12.1 15.3 12.2 C15.6 12.3 16.7 12.9 17 13 C17.3 13.2 17.4 13.2 17.4 13.5 C17.4 13.8 17.3 14.5 16.9 14.9 C16.5 15.4 15.7 15.8 15.1 15.8 C13 15.8 10.4 14.2 9 12.3 C7.9 10.9 7.5 9.8 7.9 8.8 C8.1 8.3 8.6 7.9 8.8 7.8 Z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
}
