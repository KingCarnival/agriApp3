// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
    "@vite-pwa/nuxt",
  ],
  pwa: {
    manifest: {
      name: "More than Farming",
      short_name: "More than Farming",
      description: "Testing PWA",
      icons: [
        {
          src: "/icons/pwa-64x64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "/icons/pwa-144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "/icons/pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/icons/pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
  colorMode: {
    classSuffix: "",
  },
})
