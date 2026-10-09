"use client";

export default function PrivacyButton({ className = "" }: { className?: string }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event("inap:open-privacy"))}>
      Privacy e cookie
    </button>
  );
}
