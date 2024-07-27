import { type PropsWithChildren } from "hono/jsx";
import { html } from "hono/html";
import { GoogleAnalytics } from "./analytics";
import { Header } from "./header";

export function Layout({
  children,
  title = "Knowles Glass & Glazing",
}: PropsWithChildren<{ title?: string }>) {
  return (
    <>
      {html`<!doctype html>`}
      <html>
        <head>
          <title>{title}</title>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/png" sizes="48x48" href="/favicon.ico" />
          <meta
            name="keywords"
            content="construction, glass, glazing, south florida, residential, commercial, miami, fort lauderdale, west palm beach"
          />
          <meta
            name="description"
            content="South florida construction company specializing in residential and commercial installation of glass and glazing projects."
          />
          <link rel="stylesheet" href="/static/styles.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          {process.env.NODE_ENV !== "production" && (
            <script src="/static/livereload.js"></script>
          )}
        </head>

        <body class="bg-white text-black">
          <Header />
          {children}
          <GoogleAnalytics />

          {html`
            <script>
              document.addEventListener("DOMContentLoaded", (event) => {
                var fontLink = document.createElement("link");
                fontLink.href =
                  "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap";
                fontLink.rel = "stylesheet";
                document.head.appendChild(fontLink);
              });
            </script>
          `}
        </body>
      </html>
    </>
  );
}
