import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Cart",
  description:
    "Review items in your Tobias Tech Hub cart (browser demo). Confirm orders and payment on WhatsApp.",
};

export default function CartLayout({ children }: { children: ReactNode }) {
  return children;
}
