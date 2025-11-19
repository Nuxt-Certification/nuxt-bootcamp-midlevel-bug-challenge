// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default await withNuxt({
  languageOptions: {
    globals: {
      defineNuxtConfig: "readonly",
      defineEventHandler: "readonly",
      getRouterParam: "readonly",
    },
  },
  rules: {
    "vue/first-attribute-linebreak": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "no-unused-vars": "off",
    "vue/multi-word-component-names": "off",
    "vue/html-self-closing": "off",
    "vue/no-v-html": "off",
  },
});
