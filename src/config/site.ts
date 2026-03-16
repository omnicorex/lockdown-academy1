import { brandingConfig } from "./branding";

export const siteConfig = {
  url: "https://lockdown.omnicorex.com",
  path: "/",
  locale: "en_US",
  title: brandingConfig.siteName,
  description: brandingConfig.description,
  ogImage: "/lockdown-academy-social-card2.png",
  logo: "/logo.svg"
} as const;
