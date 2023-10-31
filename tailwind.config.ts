import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/unnamed.jpg')",
      },
    },
  },
  plugins: [],
}
export default config
