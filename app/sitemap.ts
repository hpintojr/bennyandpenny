import type { MetadataRoute } from "next";

const siteUrl = "https://bennyandpenny.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/our-work",
    "/families",
    "/about",
    "/work-with-us",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/privacy" || path === "/terms" ? 0.3 : 0.8,
  }));
}
