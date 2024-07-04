import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainStore = defineStore("store", () => {
  const menuToggle = ref(false);

  function toggleMenu() {
    menuToggle.value = !menuToggle.value;
  }

  return { menuToggle, toggleMenu };
});
