/**
 * @jsx h
 * @jsxFrag Fragment
 */
import { Fragment, h, html, type Options, statusCode, UnoCSS } from "./deps.ts";
import { Link } from "./components/link.tsx";
import type { CommonOptions, SpecfrontOptions } from "./model.ts";

const commonOption = (options: CommonOptions): Omit<Options, "body"> => ({
  lang: options.lang,
});

const swaggerCommonOption = (options: CommonOptions): Options => ({
  ...commonOption(options),
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
        url: '${options.url}',
        dom_id: '#swagger-ui',
        supportedSubmitMethods: ["get", "head"],
      });
    };
    `,
    {
      src: "https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui-bundle.js",
    },
  ],
  body: (
    <>
      {!options.disabledLanding && (
        <header class="py-2 px-5">
          <Link href={options.base || ""}>Return to TOP page</Link>
        </header>
      )}
      <main>
        <div id="swagger-ui" />
      </main>
      <footer class="mt-36 mb-2">
        <small class="block text-center">
          powered by{" "}
          <Link
            type="external"
            href="https://github.com/swagger-api/swagger-ui"
          >
            Swagger UI
          </Link>{" "}
          and{" "}
          <Link type="external" href="https://github.com/rwl-dev/specfront">
            Specfront
          </Link>
        </small>
      </footer>
    </>
  ),
});

html.use(UnoCSS());

const SITE_NAME = "Specfront";
const SITE_DESCRIPTION = "Specfront is a wrapper library for the Swagger UI.";

export const specfront = (request: Request, options: SpecfrontOptions) => {
  const { pathname } = new URL(request.url);
  const title = options.sitename || SITE_NAME;
  const description = options.description || SITE_DESCRIPTION;
  const basePath = options.basepath || "/";

  // TOP page pattern
  if (pathname === basePath) {
    if (options.disabledLanding) {
      return html({
        ...swaggerCommonOption({
          lang: options.lang,
          url: options.spec.url,
          base: basePath,
          disabledLanding: options.disabledLanding,
        }),
        title: `${options.spec.title} | ${title}`,
        meta: {
          description: options.spec.description,
        },
      });
    }

    return html({
      title,
      meta: {
        description,
      },
      body: (
        <>
          <header class="py-2 px-5">
            <h1 class="text-3xl font-bold">{title}</h1>
          </header>
          <main class="px-8">
            <p class="mt-4">{description}</p>
            <section class="mt-4">
              <h2 class="text-2xl font-bold">Spec list</h2>
              <ul class="mt-1 pl-5 list-disc">
                <li class="">
                  <Link href={options.spec.path || ""}>
                    {options.spec.title || "Swagger Spec"}
                  </Link>
                </li>
              </ul>
            </section>
          </main>
          <footer class="mt-36">
            <small class="block text-center">
              powered by{" "}
              <Link type="external" href="https://github.com/rwl-dev/specfront">
                Specfront
              </Link>
            </small>
          </footer>
        </>
      ),
    });
  }

  // Swagger page pattern
  if (pathname === options.spec.path) {
    return html({
      ...swaggerCommonOption({
        lang: options.lang,
        url: options.spec.url,
        base: basePath,
        disabledLanding: options.disabledLanding,
      }),
      title: `${options.spec.title} | ${title}` || `Swagger Spec | ${title}`,
      meta: {
        description: options.spec.description,
      },
    });
  }

  // 404 page pattern
  return html({
    title: `404 Not Found | ${title}`,
    status: statusCode.notFound,
    meta: {
      description,
    },
    body: (
      <>
        <header class="py-2 px-5">
          <h1 class="text-3xl font-bold">{title}</h1>
        </header>
        <main class="px-8">
          <p>
            Sorry, URL not found. Please return to{" "}
            <Link href="/">TOP page</Link>.
          </p>
        </main>
        <footer class="mt-36">
          <small class="block text-center">
            powered by{" "}
            <Link type="external" href="https://github.com/rwl-dev/specfront">
              Specfront
            </Link>
          </small>
        </footer>
      </>
    ),
  });
};
