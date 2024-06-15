import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";
import { services } from "../../constants";

export default defineNuxtRouteMiddleware((to) => {
  let match = false;
  services.forEach((element) => {
    if (element.id === to.params.id) match = true;
  });
  if (!match) return navigateTo("/notfound");
});
