import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Demo sign-in for Tobias Tech Hub. Real accounts and checkout are coming later.",
};

export default function SignInLayout({ children }: { children: ReactNode }) {
  return children;
}
