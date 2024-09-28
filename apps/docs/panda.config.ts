import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // to provide preset css selectors or media queries
  conditions: {
    light: '[data-theme=light] &',
    dark: '[data-theme=dark] &',
  },

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/components/**/*.{ts,tsx,js,jsx}", "./src/app/**/*.{ts,tsx,js,jsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
    semanticTokens: {
      colors: {
        foreground: {
          value: {
            _light: '{colors.gray.700}',
            _dark: '#fff'
          }
        },
        background: {
          value: {
            _light: '#fff',
            _dark: '{colors.gray.700}'
          }
        },
      },
    }
  },

  // The output directory for your css system
  outdir: "styled-system",
});
