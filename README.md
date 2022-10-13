# Specfront
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/specfront/mod.tsx)

Unofficial Swagger UI wrapper library for Deno.

## Usage
### Single page(disabled landing page)
``` typescript
import { serve } from "https://deno.land/std/http/server.ts";
import { specfront } from "https://deno.land/x/specfront/mod.tsx";

serve((req) =>
  specfront(req, {
    lang: "en",
    disabledLanding: true,
    spec: {
      title: "Sample Swagger",
      description: "Swagger UI testing page",
      url: "https://petstore3.swagger.io/api/v3/openapi.json",
    },
  })
);
```

### Multi page
``` typescript
import { serve } from "https://deno.land/std/http/server.ts";
import { specfront } from "https://deno.land/x/specfront/mod.tsx";

serve((req) =>
  specfront(req, {
    lang: "en",
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

