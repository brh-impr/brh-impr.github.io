import { getSiteSettings } from "@/lib/content";

const siteSettings = getSiteSettings();

export const siteConfig = {
  siteName: siteSettings.site_name,
  siteDescription: siteSettings.site_description ?? "",
  siteUrl: siteSettings.site_url,
  disclaimer: siteSettings.club_disclaimer,
  contactEmail: siteSettings.contact_email,
  recruitingEmail: siteSettings.recruiting_email ?? "",
  instagramUrl: siteSettings.instagram_url ?? "",
  youtubeUrl: siteSettings.youtube_url ?? "",
  xUrl: siteSettings.x_url ?? "",
  homeRink: siteSettings.home_rink ?? "",
  logo: siteSettings.logo ?? "",
};
