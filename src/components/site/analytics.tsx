import Script from "next/script";

export function SiteAnalytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN?.trim();
  if (!domain) return null;

  return (
    <Script
      src="https://plausible.io/js/script.js"
      data-domain={domain}
      strategy="afterInteractive"
    />
  );
}
