import type { Metadata } from "next";
import siteMetadata from "@/utils/siteMetaData";
import { DM_Sans } from "next/font/google";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: siteMetadata.title,
  description: siteMetadata.description,

  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    // nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.socialBanner],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="k3Mu_NRmonR916_W69sQXbvwCkKEQ8VczZ8IAWJpmBc"
      />
      <body className={dmSans.className}>
        <main className="max-w-[1500px] mx-auto bg-black">
          <Hero />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
