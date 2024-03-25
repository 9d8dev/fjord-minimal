import "./globals.css";
import fjord from "@/fjord.config";

// Font Imports
import { Manrope } from "next/font/google";

// Provider Imports
import { ThemeProvider } from "@/components/global/theme-provider";

// Component Imports
import * as Craft from "@/components/craft";
import { ModeToggle } from "@/components/global/elements/theme-toggle";
import { Button } from "@/components/ui/button";
import { NavMenu } from "@/components/global/nav-menu";
import { MobileNav } from "@/components/global/mobile-nav";

// React and Next Imports
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

// Utility Imports
import Logo from "@/public/logo.svg";
import Balancer from "react-wrap-balancer";
import { Github, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

const github_link = "https://github.com/9d8dev/fjord-minimal";
const x_link = "https://x.com/bridgertower";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Craft.Layout className={`${manrope.variable}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </Craft.Layout>
  );
}

const Nav = ({ className, children, id }: NavProps) => {
  return (
    <nav
      className={cn("sticky z-50 top-0 bg-background", "border-b", className)}
      id={id}
    >
      <div
        id="nav-container"
        className="max-w-5xl mx-auto py-4 px-6 sm:px-8 flex justify-between items-center"
      >
        <Link className="hover:opacity-75 transition-all" href="/">
          <h2 className="sr-only">Craft UI</h2>
          <Image src={fjord.logo} alt="Logo" width={72} height={48}></Image>
        </Link>
        {children}
        <div className="flex items-center gap-2">
          <NavMenu />
          <Button asChild>
            <Link href={fjord.menu.cta}>Get Started</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="border-t drop-shadow-sm">
      <Craft.Section>
        <Craft.Container className="grid gap-6 md:grid-cols-2">
          <div className="grid gap-6">
            <Link href="/">
              <h3 className="sr-only">Craft UI</h3>
              <Image src={Logo} alt="Logo" width={100} height={50}></Image>
            </Link>
            <p>
              <Balancer>{fjord.site_description}</Balancer>
            </p>

            <div className="flex gap-2">
              <ModeToggle />
              <Button variant="outline" asChild size="icon">
                <Link href={github_link}>
                  <Github className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                  <span className="sr-only">Visit Github</span>
                </Link>
              </Button>
              <Button variant="outline" asChild size="icon">
                <Link href={x_link}>
                  <Twitter className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                  <span className="sr-only">Visit Twitter</span>
                </Link>
              </Button>
            </div>
            <p className="text-muted-foreground hidden sm:block">
              Code © <a href="https://9d8.dev">9d8</a>. 2023-present.
            </p>
          </div>
          <p className="text-muted-foreground block sm:hidden">
            Code © <a href="https://9d8.dev">9d8</a>. 2023-present.
          </p>
        </Craft.Container>
      </Craft.Section>
    </footer>
  );
};
