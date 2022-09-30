/** @jsx h  */
import { h, type Handler, html, type Options, UnoCSS } from "./deps.ts";
import { SpecbaseOptions } from "./model.ts";

const commonOption = (url: string): Options => ({
  lang: "ja",
  links: [
    { rel: "mask-icon", href: "/logo.svg", color: "#ffffff" },
    {
      rel: "stylesheet",
      href: "https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui.css",
    },
  ],
  scripts: [
    `
    window.onload = () => {
      window.ui = SwaggerUIBundle({
        url: '${url}',
        dom_id: '#swagger-ui',
      });
    };
    `,
    {
      src: "https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui-bundle.js",
    },
  ],
  body: <div id="swagger-ui" />,
});

html.use(UnoCSS());

export const specbase = (options: SpecbaseOptions) =>
  html({
    ...commonOption(options.url),
    title: options.title,
    meta: {
      description: options.description,
    },
  });
