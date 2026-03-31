/** Used when `NEXT_PUBLIC_SITE_URL` is not set (build time and runtime). */
export const FALLBACK_SITE_ORIGIN = "https://tobiastechhub.com";

/** Canonical site origin, no trailing slash. */
export function getSiteOrigin(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) return raw.replace(/\/$/, "");
  return FALLBACK_SITE_ORIGIN;
}

export function getMetadataBase(): URL {
  return new URL(getSiteOrigin());
}
