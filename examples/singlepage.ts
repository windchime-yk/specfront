import { Hono } from "https://deno.land/x/hono@v3.11.11/mod.ts";
import { specfront } from "../mod.tsx";

const app = new Hono();

app.get("/", (ctx) => {
  return ctx.text(
    "This is single page specfront example powered by Hono!! however Hono have Swagger UI middleware!! If Hono used `@hono/swagger-ui` reccomend!!",
  );
});

app.get("/petstore", (ctx) => {
  return specfront(ctx.req.raw, {
    "lang": "en",
    "disabledLanding": true,
    spec: {
      title: "Sample Swagger",
      description: "Swagger UI testing page",
      path: "/petstore",
      url: "https://petstore3.swagger.io/api/v3/openapi.json",
    },
  });
});

Deno.serve(app.fetch)
