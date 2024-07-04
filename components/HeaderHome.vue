<template>
  <header
    class="header mx-4 md:mx-0"
    :class="store.menuToggle ? 'top-0' : 'top-[-5rem]'"
  >
    <a href="/">
      <img
        src="../assets/logo.svg"
        class="md:h-16 h-8 flex md:hidden logo"
        alt="Frameplay Production Logo"
      />
    </a>
    <nav class="nav-items gap-12 2xl:gap-24 hidden md:flex justify-center">
      <a href="/" class="item base-text text-style-3">LAVORI</a>
      <a href="/about" class="item base-text text-style-3">ABOUT</a>
      <a href="/contatti" class="item base-text text-style-3">CONTATTI</a>
    </nav>
    <a href="/en" class="lang hidden md:block base-text text-style-3 mr-8"
      >ENG</a
    >
    <MenuSvg class="md:hidden block base-text text-style-3"></MenuSvg>
  </header>
</template>

<script lang="ts" setup>
import { useMainStore } from "~/stores/myStore";

const store = useMainStore();
</script>

<style scoped>
.header {
  padding: 2rem 0rem;
  display: flex;
  position: sticky;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  mix-blend-mode: exclusion;
}

@media screen and (min-width: 768px) {
  .header {
    animation: stickyNav linear forwards;
    @supports (animation-timeline: view()) {
      animation-timeline: view();
      animation-range-start: 170vh;
      animation-range-end: 210vh;
    }
  }

  .logo {
    display: var(--display, none);
  }
  .lang {
    display: var(--lang, block);
  }
}

@keyframes stickyNav {
  0%,
  100% {
    --display: block;
    --lang: none;
    --width: auto;
    mix-blend-mode: normal;
    padding: 2rem;
  }

  100% {
    background-color: var(--color-overlay-dark);
    top: 0rem;
  }
}

.nav-items {
  z-index: 2;
  width: var(--width, 100%);
}

.item {
  cursor: pointer;
  @apply text-c-1;
  width: fit-content;
  display: block;
  text-decoration: none;
  transition: all 400ms var(--cubic-bezier);
}

.item::after {
  content: "";
  display: block;
  width: 0%;
  margin-top: 4px;
  height: 0.2rem;
  @apply bg-c-1;
}

.nav-items:hover > .item {
  @apply text-c-3;
}

.nav-items:not(:hover) > .item::after {
  width: 0%;
  transition: width 800ms var(--cubic-bezier);
}

.item:not(:hover) {
  transition: all 800ms ease;
}

.nav-items:hover > .item:hover {
  @apply text-c-1;
  transition: all 800ms ease;
}

.nav-items:hover > .item:hover::after {
  width: 100%;
  transition: width 800ms var(--cubic-bezier);
}

.nav-items:hover > .item:not(:hover)::after {
  width: 0%;
  transition: width 800ms var(--cubic-bezier);
}
</style>
