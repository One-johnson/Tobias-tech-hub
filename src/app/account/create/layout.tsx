import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Create account",
  description: "Demo account creation for Tobias Tech Hub. Real accounts and checkout are coming later.",
};

export default function CreateAccountLayout({ children }: { children: ReactNode }) {
  return children;
}
