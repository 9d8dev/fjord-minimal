import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import * as Craft from "@/components/craft/layout";
import Nav from "@/components/craft/section/nav";
import Footer from "@/components/craft/section/footer";
import "./globals.css";
import fjord from "@/fjord.config";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    template: fjord.site_title,
    default: `%s | ${fjord.site_name}`,
    absolute: `Home | ${fjord.site_name}`,
  },
  description: fjord.site_description,
  generator: "Next.js",
  applicationName: fjord.site_name,
  referrer: "origin-when-cross-origin",
  keywords: fjord.keywords,
  authors: fjord.authors,
  metadataBase: new URL(fjord.site_domain),
  openGraph: {
    title: fjord.site_title,
    description: fjord.site_description,
    url: fjord.site_domain,
    siteName: fjord.site_name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Craft.Layout className={`${manrope.variable}`}>
      <Nav />
      {children}
      <Footer />
    </Craft.Layout>
  );
}
