const GOOGLE_TRACKING_ID = "G-BEFSK5DC76";

export function GoogleAnalytics() {
  return (
    <script
      id="google-analytics"
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_TRACKING_ID}', {
              page_path: window.location.pathname,
            });

            document.addEventListener('click', function (event) {
              var target = event.target;
              if (!(target instanceof Element)) return;

              var link = target.closest('a[href^="tel:"], a[href^="mailto:"]');
              if (!link) return;
              var href = link.getAttribute('href') || '';

              gtag('event', 'generate_lead', {
                method: href.startsWith('tel:') ? 'phone' : 'email',
                transport_type: 'beacon',
              });
            });

            function loadGoogleAnalytics() {
              if (document.querySelector('script[data-google-analytics]')) return;

              var script = document.createElement('script');
              script.async = true;
              script.dataset.googleAnalytics = 'true';
              script.src = 'https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TRACKING_ID}';
              document.head.appendChild(script);
            }

            window.addEventListener('load', function () {
              if ('requestIdleCallback' in window) {
                window.requestIdleCallback(loadGoogleAnalytics, { timeout: 2000 });
              } else {
                window.setTimeout(loadGoogleAnalytics, 0);
              }
            }, { once: true });
          `,
      }}
    />
  );
}
