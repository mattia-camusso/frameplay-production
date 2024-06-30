<template>
  <nav class="header gap-12 md:gap-8 2xl:gap-24 flex w-full justify-center">
    <a href="/" class="item base-text text-style-3">LAVORI</a>
    <a href="/about" class="item base-text text-style-3">ABOUT</a>
    <a href="/contatti" class="item base-text text-style-3">CONTATTI</a>
  </nav>
</template>

<script lang="ts" setup></script>

<style scoped>
.header {
  z-index: 2;
}

.item {
  cursor: pointer;
  @apply text-c-1;
  width: fit-content;
  display: block;
  text-decoration: none;
  transition: all 400ms var(--cubic-bezier);
  mix-blend-mode: exclusion;
}

.item::after {
  content: "";
  display: block;
  width: 0%;
  margin-top: 4px;
  height: 0.2rem;
  @apply bg-c-1;
}

.header:hover > .item {
  @apply text-c-3;
}

.header:not(:hover) > .item::after {
  width: 0%;
  transition: width 800ms var(--cubic-bezier);
}

.item:not(:hover) {
  transition: all 800ms ease;
}

.header:hover > .item:hover {
  @apply text-c-1;
  transition: all 800ms ease;
}

.header:hover > .item:hover::after {
  width: 100%;
  transition: width 800ms var(--cubic-bezier);
}

.header:hover > .item:not(:hover)::after {
  width: 0%;
  transition: width 800ms var(--cubic-bezier);
}
</style>
