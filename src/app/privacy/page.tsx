import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Tobias Tech Hub handles information when you use our website, WhatsApp, or contact options.",
};

export default function PrivacyPage() {
  return (
    <div className="container-page max-w-3xl py-12">
      <p className="text-sm font-medium text-emerald-200/90">Legal</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
        Privacy
      </h1>
      <p className="mt-6 text-sm leading-7 text-white/70">
        Tobias Tech Hub (“we”, “us”) respects your privacy. This page describes our site-only
        practices in plain language. If you engage us via WhatsApp, phone, or email, those channels
        have their own providers; use them only if you are comfortable with their policies.
      </p>

      <h2 className="mt-10 text-lg font-semibold text-white">What we collect on this website</h2>
      <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-7 text-white/70">
        <li>
          <span className="font-medium text-white/85">Technical data:</span> standard server or
          hosting logs may include IP address, browser type, and pages viewed.
        </li>
        <li>
          <span className="font-medium text-white/85">Optional analytics:</span> if enabled, we may
          use privacy-friendly analytics (for example Plausible) to understand traffic without
          cross-site tracking.
        </li>
        <li>
          <span className="font-medium text-white/85">Contact &amp; demo forms:</span> anything you
          type into forms is only used to respond to you. The on-site contact form is currently a
          demo; prefer WhatsApp or phone for real inquiries.
        </li>
        <li>
          <span className="font-medium text-white/85">Cart &amp; account (demo):</span> data may be
          stored in your browser (local storage) for convenience—it is not synced to a server yet.
        </li>
      </ul>

      <h2 className="mt-10 text-lg font-semibold text-white">How we use information</h2>
      <p className="mt-4 text-sm leading-7 text-white/70">
        To reply to questions, prepare quotes, fulfil orders you request, and improve the site. We
        do not sell your personal information.
      </p>

      <h2 className="mt-10 text-lg font-semibold text-white">Contact</h2>
      <p className="mt-4 text-sm leading-7 text-white/70">
        For privacy-related questions, reach us through the details on our{" "}
        <Link href="/contact" className="text-emerald-200/90 underline-offset-4 hover:underline">
          Contact
        </Link>{" "}
        page.
      </p>

      <p className="mt-10 text-xs text-white/45">
        Last updated March 2026. This is general information—not legal advice.
      </p>
    </div>
  );
}
