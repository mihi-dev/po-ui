"use client";
import { css } from "@styled-system/css";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme } = useTheme();
  
  return (
    <Link
      href="/"
      className={css({
        display: "flex",
        alignItems: "center",
        gap: 1,
      })}
    >
      {theme === "light" ? (
        <Image
          src="/light-logo.svg"
          alt="Logo"
          sizes="100vw"
          height={0}
          width={0}
          style={{
            width: "auto",
            height: 64,
          }}
          priority
        />
      ) : (
        <Image
          src="/dark-logo.svg"
          alt="Logo"
          sizes="100vw"
          height={0}
          width={0}
          style={{
            width: "auto",
            height: 64,
          }}
          priority
        />
      )}
    </Link>
  );
};

export default Logo;
