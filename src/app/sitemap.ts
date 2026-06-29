import { MetadataRoute } from "next";
import { services } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "http://brainboxsolutions.net";

  // Static routes
  const staticRoutes = ["", "/about", "/services", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic service detail routes
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
