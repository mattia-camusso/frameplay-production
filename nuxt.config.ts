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
  seo: {
    redirectToCanonicalSiteUrl: false,
  },
  app: {
    head: {
      title: "Frameplay Production",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "google-site-verification",
          content: "CKJfL_-oABuWTMTGw9W1CE7jDBwMc-Bcw4ZrtThHfVY",
        },
      ],
      link: [
        //{ rel: "icon", type: "image/svg", href: "_nuxt/assets/favicon.svg" },
      ],
    },
  },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
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
