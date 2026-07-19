import { type PropsWithChildren } from "hono/jsx";
import { html } from "hono/html";
import {
  BUSINESS_HOURS,
  BUSINESS_NAME,
  COUNTIES,
  EMAIL,
  PHONE_NUMBER,
  SERVICES,
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
} from "../business";
import { GoogleAnalytics } from "./analytics";
import { Header } from "./header";

const fontStylesheetUrl =
  "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Source+Sans+3:wght@400;600;700&display=swap";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: BUSINESS_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/static/og-knowles.jpg`,
  telephone: PHONE_NUMBER,
  email: EMAIL,
  description: SITE_DESCRIPTION,
  openingHours: BUSINESS_HOURS.schema,
  areaServed: COUNTIES.map((name) => ({
    "@type": "AdministrativeArea",
    name,
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Glass and glazing services",
    itemListElement: SERVICES.map(({ schemaName: name }) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
      },
    })),
  },
};

export function Layout({
  children,
  title: pageTitle = SITE_TITLE,
}: PropsWithChildren<{ title?: string }>) {
  return (
    <>
      {html`<!doctype html>`}
      <html lang="en">
        <head>
          <title>{pageTitle}</title>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#064da8" />
          <meta name="description" content={SITE_DESCRIPTION} />
          <link rel="canonical" href={`${SITE_URL}/`} />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />

          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={BUSINESS_NAME} />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={SITE_DESCRIPTION} />
          <meta property="og:url" content={`${SITE_URL}/`} />
          <meta
            property="og:image"
            content={`${SITE_URL}/static/og-knowles.jpg`}
          />
          <meta
            property="og:image:alt"
            content="Commercial storefront glazing completed in South Florida"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={SITE_DESCRIPTION} />
          <meta
            name="twitter:image"
            content={`${SITE_URL}/static/og-knowles.jpg`}
          />

          <link
            rel="preload"
            as="image"
            href="/static/optimized/gallery-2-full.webp"
            imagesrcset="/static/optimized/gallery-2-640.webp 640w, /static/optimized/gallery-2-full.webp 1280w"
            imagesizes="(min-width: 960px) 54vw, 100vw"
            fetchpriority="high"
          />
          <link rel="stylesheet" href="/static/styles.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link rel="preload" as="style" href={fontStylesheetUrl} />
          <link
            rel="stylesheet"
            href={fontStylesheetUrl}
            media="print"
            onload="this.media='all'"
          />
          <noscript>
            <link rel="stylesheet" href={fontStylesheetUrl} />
          </noscript>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
          <GoogleAnalytics />
          {process.env.NODE_ENV !== "production" && (
            <script src="/static/livereload.js"></script>
          )}
        </head>

        <body>
          <Header />
          {children}
        </body>
      </html>
    </>
  );
}
