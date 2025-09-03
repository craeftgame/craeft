import { config } from "@craeft/engine/dist/config";
import { MedievalSharp } from "next/font/google";
import React, { ReactNode } from "react";
import Filters from "../assets/filters";
import ServiceWorkerRegister from "../serviceworker/ServiceWorkerRegister"; // custom css
import "bulma/css/bulma.min.css";
import "../css/rpgui.scss";
import "../css/craeft.scss";

const medieval = MedievalSharp({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  readonly children: ReactNode;
}) {
  return (
    <html lang="en" className={medieval.className}>
      <head>
        <meta charSet="utf-8" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />

        <meta
          name="Description"
          content="Cräft is an open screen cräfting RPG that implements the CWEYW (Cräft What Ever You Want) engine."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@craeftgame" />
        <meta name="twitter:title" content={config.name} />
        <meta
          name="twitter:description"
          content="Cräft is an open screen cräfting RPG that implements the CWEYW (Cräft What Ever You Want) engine."
        />
        <meta
          name="twitter:image"
          content="https://cräft.com/craeft_twitter.png"
        />

        <meta property="og:url" content="https://cräft.com/" />
        <meta property="og:title" content={config.name} />
        <meta
          property="og:description"
          content="Cräft is an open screen cräfting RPG that implements the CWEYW (Cräft What Ever You Want) engine."
        />
        <meta property="og:image" content="https://cräft.com/craeft.png" />

        <meta name="theme-color" content="#222" />

        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        <link
          rel="preload"
          href="https://use.fontawesome.com/releases/v5.12.0/css/all.css"
          crossOrigin="anonymous"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.12.0/css/all.css"
          crossOrigin="anonymous"
        />

        {/*
          manifest.json provides metadata used when your web app is installed on a
          user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
        */}
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>

        <Filters />
        <ServiceWorkerRegister />

        <div className="rpgui-content container">{children}</div>
      </body>
    </html>
  );
}
