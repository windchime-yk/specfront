import { specfront } from "./mod.tsx";

Deno.serve((req) =>
  specfront(req, {
    lang: "en",
    spec: {
      title: "Sample Swagger",
      description: "Swagger testing page",
      path: "/petstore",
      url: "https://petstore3.swagger.io/api/v3/openapi.json",
    },
  })
);
