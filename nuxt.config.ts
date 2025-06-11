import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  runtimeConfig: {
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
  },

  app: {
    baseURL: '/',
  },

  modules: [
    '@pinia/nuxt',
    '@nuxt/devtools'
  ],

  build: {
    transpile: ['primevue'],
  },

  vite: {
    plugins: [tailwindcss()]
  },

  css: [
    'primevue/resources/themes/aura-light-noir/theme.css',
    'primevue/resources/primevue.min.css',
    'primeicons/primeicons.css',
    '~/assets/css/main.css'
  ],

  devtools: { enabled: true },
  compatibilityDate: '2025-04-06'
});
