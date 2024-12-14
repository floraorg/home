// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <title>~/org/flora</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.png" />

          <meta name="title" content="~/org/flora" />
          <meta name="description" content="random utilities for the web" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://flora.tf" />
          <meta property="og:title" content="~/org/flora" />
          <meta
            property="og:description"
            content="random utilities for the web"
          />
          <meta property="og:image" content="/og-image.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://flora.tf" />
          <meta property="twitter:title" content="~/org/flora" />
          <meta
            property="twitter:description"
            content="random utilities for the web"
          />
          <meta property="twitter:image" content="/og-image.png" />

          <meta name="theme-color" content="#000000" />
          {assets}
        </head>
        <body class="overflow-x-hidden">
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
