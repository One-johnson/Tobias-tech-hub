import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delivery & returns",
  description:
    "How delivery, pickup, and returns work at Tobias Tech Hub in Accra—confirm details on WhatsApp before payment.",
};

export default function ReturnsPage() {
  return (
    <div className="container-page max-w-3xl py-12">
      <p className="text-sm font-medium text-emerald-200/90">Policies</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
        Delivery, pickup &amp; returns
      </h1>
      <p className="mt-6 text-sm leading-7 text-white/70">
        We serve customers in Accra and surrounding areas. Exact fees, timing, and eligibility
        depend on the product and your location—always confirm on{" "}
        <Link href="/contact" className="text-emerald-200/90 underline-offset-4 hover:underline">
          WhatsApp or phone
        </Link>{" "}
        before you pay.
      </p>

      <h2 className="mt-10 text-lg font-semibold text-white">Delivery &amp; pickup</h2>
      <p className="mt-4 text-sm leading-7 text-white/70">
        Options may include courier delivery or scheduled pickup. Packaging and handling are done
        with care; inspect items when possible and report visible shipping damage promptly.
      </p>

      <h2 className="mt-10 text-lg font-semibold text-white">Pricing &amp; stock</h2>
      <p className="mt-4 text-sm leading-7 text-white/70">
        Prices and availability on this website are indicative. Final price, taxes or fees, and
        stock are confirmed when you place an order through WhatsApp or our agreed sales channel.
      </p>

      <h2 className="mt-10 text-lg font-semibold text-white">Returns &amp; warranties</h2>
      <p className="mt-4 text-sm leading-7 text-white/70">
        Return windows and manufacturer warranties vary by product and supplier. We will explain
        what applies to your purchase before you commit. Keep receipts and serial numbers where
        relevant.
      </p>

      <p className="mt-10 text-xs text-white/45">
        Last updated March 2026. Confirm all terms at purchase time.
      </p>
    </div>
  );
}
