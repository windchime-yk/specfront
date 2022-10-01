# Specbase
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/specbase/mod.tsx)

Unofficial Swagger UI wrapper library for Deno.

## Usage
``` typescript
import { serve } from "https://deno.land/std/http/server.ts";
import { specbase } from "https://deno.land/x/specbase/mod.tsx";

serve((req) =>
  specbase(req, {
    spec: {
      title: "Sample Swagger",
      description: "Swagger UI testing page",
      path: "/petstore",
      url: "https://petstore3.swagger.io/api/v3/openapi.json",
    },
  })
);
```

## LICENSE
Apache License 2.0 (Inherited from Swagger UI)

