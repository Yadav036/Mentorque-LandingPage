
type Props = { label: string }; // e.g., "Week 2 — Resume Rebuild & Optimization"

export default function WhatsAppCTA({ label }: Props) {
  const number = "918486242054"; // no '+' for wa.me
  const msg = `Hi Team, I want to schedule a call for *${label}*.`;
  const waUrl = `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium shadow-sm ring-1 ring-black/5 dark:ring-white/10 hover:shadow-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700"
    >
      Request a Call Back
    </a>
  );
}
