import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      authOrigin: process.env.AUTH_ORIGIN || 'http://localhost:3000',
      authBaseURL: process.env.AUTH_BASE_URL || 'http://host.docker.internal:3000/api/auth'
    },
    AUTH_SECRET: process.env.AUTH_SECRET,
    AUTHENTIK_CLIENT_ID: process.env.AUTHENTIK_CLIENT_ID,
    AUTHENTIK_CLIENT_SECRET: process.env.AUTHENTIK_CLIENT_SECRET,
    AUTHENTIK_ISSUER: process.env.AUTHENTIK_ISSUER
  },

  modules: [
    '@sidebase/nuxt-auth',
    '@pinia/nuxt',
    '@nuxt/devtools'
  ],

  auth: {
    globalAppMiddleware: {
      isEnabled: false
    }
  },

  build: {
    transpile: ['primevue']
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
