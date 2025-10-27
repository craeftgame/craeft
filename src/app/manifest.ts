import type { MetadataRoute } from "next";

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cräft!",
    short_name: "Cräft!",
    icons: [
      {
        src: "favicon.ico",
        type: "image/x-icon",
        sizes: "32x32 48x48 64x64 128x128 256x256",
      },
      {
        src: "favicon.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    start_url: ".",
    background_color: "#222",
    display: "standalone",
    theme_color: "#222",
  };
}
