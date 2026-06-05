import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    baseURL: '/apple-langing-pages/',
  },
  css: ['./global.css'],
  vite: {
    plugins: [tailwindcss()],
  },
});
