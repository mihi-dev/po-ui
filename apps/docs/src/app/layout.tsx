import "./globals.css";
import Link from "next/link";
import { css } from "@styled-system/css";
import Logo from "../components/Logo";
import { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Github } from "lucide-react";

export const metadata: Metadata = {
  title: "PoUI",
};

const sans = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body
        className={css({
          backgroundColor: "background",
          color: "foreground",
        })}
      >
        <ThemeProvider defaultTheme="system" enableSystem>
          <header
            className={css({
              py: 4,
              px: 6,
              display: "flex",
              alignItems: "center",
              gap: 8,
              borderBottomColor: "stone.300",
              borderBottomWidth: 1,
            })}
          >
            <Logo />
            <nav
              className={css({
                display: "flex",
                gap: 4,
              })}
            >
              <Link href="/docs">Docs</Link>
              <Link href="/about">About</Link>
            </nav>
            <div
              className={css({
                flex: 1,
                display: "flex",
                justifyContent: "flex-end",
                gap: 4,
              })}
            >
              <Link href="https://github.com/mihi-dev/po-ui" target="_blank">
                <Github size={24} />
              </Link>
              <ThemeSwitcher />
            </div>
          </header>
          <main
            className={css({
              padding: 6,
            })}
          >
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
