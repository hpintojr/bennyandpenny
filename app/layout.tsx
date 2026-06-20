import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "./portfolio-images.css";
import "./logo-monogram.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const siteUrl = "https://bennyandpenny.com";
const description =
  "Benny & Penny's is the development and design studio of Hamilton Pinto Jr., delivering custom API integrations, business consulting, brand and web development, and publishing solutions.";
const socialImage = {
  url: "/images/og-benny-penny-social.png",
  width: 1200,
  height: 630,
  alt: "Benny & Penny's — A Tech Company | Hamilton Pinto Jr.",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Benny & Penny's — A Tech Company | Hamilton Pinto Jr., Software Architect & Creative Technologist",
    template: "%s | Benny & Penny's",
  },
  description,
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
    siteName: "Benny & Penny's — A Tech Company",
    title: "Benny & Penny's — A Tech Company | Hamilton Pinto Jr.",
    description,
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Benny & Penny's — A Tech Company | Hamilton Pinto Jr.",
    description,
    images: [socialImage.url],
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
    name: "Benny & Penny's — A Tech Company",
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
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
