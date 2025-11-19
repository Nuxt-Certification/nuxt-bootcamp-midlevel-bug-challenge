// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@pinia/nuxt", "@nuxt/ui"],
  css: ['~/assets/css/main.css'],
  app: {
    pageTransition: { name: "blur", mode: "out-in" },
    head: {
      title: "Tasty Meals",
      meta: [
        {
          name: "description",
          content: "A collection of the best food in the world.",
        },
      ],
    },
  },
});