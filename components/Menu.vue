<template>
  <div
    id="menu"
    :class="[store.menuToggle ? 'h-full' : 'h-0', dark ? 'bg-c-2' : 'bg-c-1']"
  >
    <div id="menu-items" ref="menuItems">
      <div
        class="menu-item text-style-big font-semibold"
        :class="[
          store.menuToggle ? 'opacity-100' : 'opacity-0',
          dark ? 'text-c-1' : 'text-c-2',
        ]"
      >
        <a :href="en ? '/en' : '/'">{{ en ? "PROJECTS" : "LAVORI" }}</a>
      </div>
      <div
        class="menu-item text-style-big font-semibold"
        :class="[
          store.menuToggle ? 'opacity-100' : 'opacity-0',
          dark ? 'text-c-1' : 'text-c-2',
        ]"
      >
        <a :href="en ? '/en/about' : '/about'">ABOUT</a>
      </div>
      <div
        class="menu-item text-style-big font-semibold"
        :class="[
          store.menuToggle ? 'opacity-100' : 'opacity-0',
          dark ? 'text-c-1' : 'text-c-2',
        ]"
      >
        <a
          @click="store.toggleMenu()"
          :href="en ? '/en/contacts' : '/contatti'"
          >{{ en ? "CONTACTS" : "CONTATTI" }}</a
        >
      </div>
      <div
        class="menu-item text-style-big font-semibold"
        :class="[
          store.menuToggle ? 'opacity-100' : 'opacity-0',
          dark ? 'text-c-1' : 'text-c-2',
        ]"
      >
        <a @click="store.toggleMenu()" :href="en ? '/' : '/en'">
          {{ en ? "ITA" : "ENG" }}
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMainStore } from "../stores/myStore";

const store = useMainStore();
defineProps({
  dark: Boolean,
  en: Boolean,
});
</script>

<style lang="scss" scoped>
#menu {
  width: 100vw;
  position: fixed;
  z-index: 40;
  top: 0;
  right: 0;

  margin: 0;
  display: flex;
  align-items: center;
  overflow: hidden;
  transition: all 1100ms var(--cubic-bezier);
  transform-origin: right;
}

#menu-items {
  margin: 5vh auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;
  z-index: 2;
}

.menu-item {
  cursor: pointer;
  width: fit-content;
  display: block;
  text-decoration: none;
  transition: translate 400ms var(--cubic-bezier);
}

#menu-items:hover > .menu-item {
  opacity: 0.5;
}

#menu-items:not(:hover) > .menu-item::after {
  width: 0%;
  transition: width 800ms var(--cubic-bezier);
}

.menu-item:not(:hover) {
  transition: all 800ms ease;
}

#menu-items:hover > .menu-item:hover {
  opacity: 1;
  transition: all 800ms ease;
}

#menu-items:hover > .menu-item:hover::after {
  width: 100%;
  transition: width 800ms var(--cubic-bezier);
}

#menu-items:hover > .menu-item:not(:hover)::after {
  width: 0%;
  transition: width 800ms var(--cubic-bezier);
}
</style>
