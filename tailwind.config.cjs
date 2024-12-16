const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        link: {
          DEFAULT: 'hsl(var(--link))',
          foreground: 'hsl(var(--link-foreground))',
        },
 
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
 
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.foreground'),
            a: {
              color: theme('colors.primary.DEFAULT'),
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.primary.foreground'),
              },
            },
            h1: { color: theme('colors.foreground') },
            h2: { color: theme('colors.foreground') },
            h3: { color: theme('colors.foreground') },
            h4: { color: theme('colors.foreground') },
            hr: { borderColor: theme('colors.border') },
            strong: { color: theme('colors.foreground') },
            blockquote: {
              color: theme('colors.muted.foreground'),
              borderLeftColor: theme('colors.muted.DEFAULT'),
            },
            a: {
              color: theme('colors.link.DEFAULT'),
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.link.foreground'),
              }, 
            },
          },
        },
        // dark: {
        //   css: {
        //     color: theme('colors.card.foreground'),
        //     a: {
        //       color: theme('colors.primary.foreground'),
        //       '&:hover': {
        //         color: theme('colors.accent.foreground'),
        //       },
        //     },
        //     h1: { color: theme('colors.card.foreground') },
        //     h2: { color: theme('colors.card.foreground') },
        //     h3: { color: theme('colors.card.foreground') },
        //     h4: { color: theme('colors.card.foreground') },
        //     hr: { borderColor: theme('colors.border') },
        //     strong: { color: theme('colors.card.foreground') },
        //     blockquote: {
        //       color: theme('colors.foreground'),
        //       borderLeftColor: theme('colors.accent.DEFAULT'),
        //     },
        //   },
        // },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
};
