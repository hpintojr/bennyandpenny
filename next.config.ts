import type { NextConfig } from "next";

const noIndexHeaders = [
  "/index.md",
  "/our-work.md",
  "/families.md",
  "/about.md",
  "/work-with-us.md",
  "/privacy.md",
  "/terms.md",
  "/accessibility.md",
  "/llm.txt",
  "/llms.txt",
  "/llms-full.txt",
].map((source) => ({
  source,
  headers: [{ key: "X-Robots-Tag", value: "noindex, follow" }],
}));

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async headers() {
    return noIndexHeaders;
  },
};

export default nextConfig;
