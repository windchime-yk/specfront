import { serve } from "./deps.ts";
import { specbase } from "./mod.tsx";

serve((req) =>
  specbase(req, {
    spec: {
      title: "Sample Swagger",
      description: "Swagger testing page",
      path: "/petstore",
      url: "https://petstore3.swagger.io/api/v3/openapi.json",
    },
  })
);
