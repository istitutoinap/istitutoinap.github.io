"use client";

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      className="footer-link-button"
      onClick={() => window.dispatchEvent(new Event("inap:open-cookie-settings"))}
    >
      Gestisci cookie
    </button>
  );
}
