import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import "./globals.css";
import { siteConfig } from "@/config/site";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: `%s | ${siteConfig.shortName}`,
    default: siteConfig.name,
  },
  description: siteConfig.description,

  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    images: [siteConfig.ogImage],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false, // Allow caching for better performance
    googleBot: {
      index: true,
      follow: true, // Allow Googlebot to follow links
      noimageindex: false, // Allow Google to index images
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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
