// app/GoogleAnalytics.jsx

"use client";

import Script from "next/script";

const GOOGLE_TRACKING_ID = "G-BEFSK5DC76";

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TRACKING_ID}`}
      />
      <Script
        id="init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${GOOGLE_TRACKING_ID}', {
                      page_path: window.location.pathname,
                      });
                    `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
