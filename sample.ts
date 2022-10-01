import { serve } from "./deps.ts";
import { specfront } from "./mod.tsx";

serve((req) =>
  specfront(req, {
    spec: {
      title: "Sample Swagger",
      description: "Swagger testing page",
      path: "/petstore",
      url: "https://petstore3.swagger.io/api/v3/openapi.json",
    },
  })
);
