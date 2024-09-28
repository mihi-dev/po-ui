import "./globals.css";
import Link from "next/link";
import { css } from "@styled-system/css";
import Logo from "../components/Logo";
import { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Github } from "lucide-react";

const pkg = require("../../package.json");

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
  const currentVersion = pkg.version;
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
              gap: 12,
              borderBottomColor: "stone.300",
              borderBottomWidth: 1,
            })}
          >
            <div
              className={css({
                display: "flex",
                flexShrink: 0,
                alignItems: "center",
                gap: 4,
              })}
            >
              <Logo />
            </div>
            <nav
              className={css({
                display: "flex",
                flex: 1,
                justifyContent: "flex-end",
                gap: 4,
              })}
            >
              <Link href="/docs">Docs</Link>
              <Link href="/about">About</Link>
            </nav>
            <div
              className={css({
                display: "flex",
                alignItems: "center",
                flexShrink: 0,
                gap: 4,
              })}
            >
              <Link href="https://github.com/mihi-dev/po-ui" target="_blank">
                <Github size={24} />
              </Link>
              <ThemeSwitcher />
              <span
                className={css({
                  fontSize: 12,
                  color: "background",
                  px: 2,
                  borderRadius: 4,
                  backgroundColor: "foreground",
                })}
              >
                v{currentVersion}
              </span>
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
