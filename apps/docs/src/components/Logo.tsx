"use client";
import { css } from "@styled-system/css";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme } = useTheme();

  const imageProps: ImageProps = {
    src: '',
    alt: "Logo",
    sizes: "100vw",
    height: 0,
    width: 0,
    style: {
      width: "auto",
      height: 48,
    },
    priority: true,
  };

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
        <Image {...imageProps} src="/light-logo.svg" />
      ) : (
        <Image {...imageProps} src="/dark-logo.svg" />
      )}
    </Link>
  );
};

export default Logo;
