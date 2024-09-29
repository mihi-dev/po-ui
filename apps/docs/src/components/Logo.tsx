'use client';
import { css } from '@styled-system/css';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  const imageProps: ImageProps = {
    src: '',
    alt: 'Logo',
    sizes: '100vw',
    height: 0,
    width: 0,
    style: {
      width: 'auto',
      height: 48,
    },
    priority: true,
  };

  return (
    <Link
      href='/'
      className={css({
        display: 'flex',
        alignItems: 'center',
        gap: 1,
      })}
    >
      <Image {...imageProps} src='/logo.png' />
    </Link>
  );
};

export default Logo;
