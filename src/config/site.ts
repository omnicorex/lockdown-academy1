import { brandingConfig } from "./branding";

export const siteConfig = {
  url: "https://lockdownacademy.com",
  path: "/",
  locale: "en_US",
  title: brandingConfig.siteName,
  description: brandingConfig.description,
  ogImage: "/social-card.svg",
  logo: "/logo.svg"
} as const;
