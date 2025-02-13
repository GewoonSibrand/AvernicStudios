// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "@nuxt/image"],
  css: [
    '@/assets/css/sfera.css',
    '@/assets/css/ocra-extended.css',
  ],
})