import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";
import { projects } from "../constants";
export default defineNuxtRouteMiddleware((to) => {
  let match = false;
  projects.forEach((element) => {
    if (element.id === to.params.id) match = true;
  });
  if (!match) return navigateTo("/notfound");
});
