// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  // routeRules: { "/": { redirect: "/apartments" } }, => can use in pageMeta at home page
});
