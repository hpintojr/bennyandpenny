import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "./accessibility.css";
import "./accessibility-fixes.css";
import "./accessibility-dock.css";
import "./portfolio-images.css";
import "./logo-monogram.css";
import "./aff-logo.css";
import { AccessibilityPreferencesDock, AccessibilityPreferencesProvider } from "@/components/AccessibilityPreferences";
import { SiteFooterAccessible } from "@/components/SiteFooterAccessible";
import { SiteHeader } from "@/components/SiteHeader";
import { SkipLink } from "@/components/SkipLink";

const siteUrl = "https://www.bennyandpenny.com";
const socialTitle = "Benny & Penny's | A Tech Company";
const description =
  "The development and design studio of Hamilton Pinto Jr., delivering custom API integrations, business consulting, and publishing solutions. Proudly motivated by my children, Benny and Penny.";
const socialDescription =
  "Building the next generation of digital tools, web applications, and technology platforms.";
const socialImageUrl = `${siteUrl}/images/og-social-background.webp?rev=20260620`;
const socialImage = {
  url: socialImageUrl,
  width: 1200,
  height: 630,
  alt: socialTitle,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: socialTitle,
    template: "%s | Benny & Penny's",
  },
  description,
  applicationName: socialTitle,
  keywords: [
    "Hamilton Pinto",
    "Hamilton Pinto Jr",
    "software architect",
    "creative technologist",
    "API integration",
    "business consulting",
    "brand design",
    "web development",
    "publisher",
    "portfolio",
    "XBeton",
    "Advantage First Financial",
    "American Colonial Capital",
    "Benny & Penny's Adventures",
    "Mercury Call Desk",
    "Southern California",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: socialTitle,
    title: socialTitle,
    description: socialDescription,
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description: socialDescription,
    images: [socialImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: socialTitle,
  url: siteUrl,
  email: "hello@bennyandpenny.com",
  description,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hamilton Pinto Jr.",
  url: siteUrl,
  email: "hello@bennyandpenny.com",
  jobTitle: "Software Architect, Creative Technologist & Publisher",
  description,
  worksFor: {
    "@type": "Organization",
    name: socialTitle,
    url: siteUrl,
  },
  knowsAbout: [
    "Software architecture",
    "API integration",
    "Business consulting",
    "Brand and web development",
    "Publishing",
    "Business intelligence",
  ],
  sameAs: [
    "https://acc.capital/",
    "https://www.advantagefirst.com/",
    "https://www.bennyandpennyadventures.com/",
    "https://www.xbeton.com/",
    "https://mercurycalldesk.com/",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AccessibilityPreferencesProvider>
          <SkipLink />
          <SiteHeader />
          <main id="main-content" tabIndex={-1}>{children}</main>
          <SiteFooterAccessible />
          <AccessibilityPreferencesDock />
        </AccessibilityPreferencesProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
