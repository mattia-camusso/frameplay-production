// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "path";
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  app: {
    head: {
      title: "Frameplay Production",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        //{ rel: "icon", type: "image/svg", href: "_nuxt/assets/favicon.svg" },
      ],
    },
  },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  modules: ["@nuxtjs/tailwindcss"],
  /*   ui: {
    global: true,
  }, */
  css: ["~/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});