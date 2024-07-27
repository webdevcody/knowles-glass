import { registerLanding } from "./pages";
import { serveStatic } from "@hono/node-server/serve-static";
import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

export type App = typeof app;

app.use("/static/*", serveStatic({ root: "./" }));
app.use("/favicon.ico", serveStatic({ path: "./static/favion.ico" }));
app.use("/robots.tsx", serveStatic({ path: "./static/robots.txt" }));
app.use("/sitemap.xml", serveStatic({ path: "./static/sitemap.xml" }));

registerLanding(app);

app.notFound((c) => {
  return c.html("not found bro");
});

serve(app);
