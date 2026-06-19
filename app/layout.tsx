import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const siteUrl = "https://bennyandpenny.com";
const description = "Benny & Penny is a family-built creative and care-centered brand creating meaningful children’s stories, visual experiences, family resources, and mission-driven projects.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Benny & Penny | Stories, Care, Creativity & Family-Led Work",
    template: "%s | Benny & Penny",
  },
  description,
  keywords: [
    "Benny and Penny",
    "children's stories",
    "family resources",
    "care-centered creativity",
    "children's books",
    "family-led brand",
    "creative portfolio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Benny & Penny",
    title: "Benny & Penny | Stories, Care, Creativity & Family-Led Work",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Benny & Penny | Stories, Care, Creativity & Family-Led Work",
    description,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Benny & Penny",
  url: siteUrl,
  email: "hello@bennyandpenny.com",
  description,
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
