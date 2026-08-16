import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ZorianPay — Financial Infrastructure for the Digital Asset Economy",
    short_name: "ZorianPay",
    description:
      "ZorianPay connects merchants, enterprises, banks, and digital assets into one unified financial ecosystem.",
    start_url: "/",
    display: "standalone",
    background_color: "#060608",
    theme_color: "#060608",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
