import { serve } from "./deps.ts";
import { specbase } from "./mod.tsx";

serve(() =>
  specbase({
    title: "Sample Swagger",
    description: "Swaggerのテストです",
    url: "https://petstore3.swagger.io/api/v3/openapi.json",
  })
);
