export const BUSINESS_NAME = "Knowles Glass & Glazing";
export const SITE_URL = "https://knowlesglassandglazing.com";
export const SITE_TITLE = `South Florida Glass Installation | ${BUSINESS_NAME}`;
export const SITE_DESCRIPTION =
  "South Florida glass and glazing contractor for commercial storefronts, curtain walls, windows, and residential or commercial glass door installation.";

export const PHONE_NUMBER = "+15619065438";
export const PHONE_DISPLAY = `${PHONE_NUMBER.slice(2, 5)}-${PHONE_NUMBER.slice(5, 8)}-${PHONE_NUMBER.slice(8)}`;
export const PHONE_HREF = `tel:${PHONE_NUMBER}`;
export const EMAIL = "Knowlesglass7@gmail.com";
export const EMAIL_HREF = `mailto:${EMAIL}?subject=Glass%20project%20inquiry`;
export const BUSINESS_HOURS = {
  display: "Monday–Friday, 8:00 a.m.–4:00 p.m.",
  schema: "Mo-Fr 08:00-16:00",
} as const;

export const SERVICES = [
  {
    title: "Commercial storefronts",
    schemaName: "Commercial storefront systems",
    description:
      "Aluminum storefront framing, glass entrances, and window systems for retail, office, and commercial properties.",
  },
  {
    title: "Curtain wall systems",
    schemaName: "Curtain wall systems",
    description:
      "Glass curtain wall installation for commercial building envelopes and daylight-filled interiors.",
  },
  {
    title: "Windows",
    schemaName: "Window installation",
    description:
      "Window installation and replacement solutions for commercial and residential properties.",
  },
  {
    title: "Swinging and sliding doors",
    schemaName: "Swinging and sliding glass doors",
    description:
      "Practical, durable glass door systems for commercial entrances and residential openings.",
  },
] as const;

export const COUNTIES = [
  "Broward County",
  "Charlotte County",
  "Collier County",
  "DeSoto County",
  "Glades County",
  "Hardee County",
  "Hendry County",
  "Highlands County",
  "Lee County",
  "Manatee County",
  "Martin County",
  "Miami-Dade County",
  "Monroe County",
  "Okeechobee County",
  "Palm Beach County",
  "Sarasota County",
  "St. Lucie County",
] as const;
