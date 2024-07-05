<template>
  <nav
    class="absolute bg-c-5 flex items-center justify-center sm:justify-between z-5 p-8 md:px-10 top-0 left-0 w-[100vw]"
  >
    <a href="/en">
      <img
        src="../../assets/logo.svg"
        class="md:h-16 h-8 hidden sm:block"
        alt="Frameplay Production Logo"
      />
    </a>
    <div class="flex header 2xl:gap-24 gap-12">
      <a href="/en" class="item base-text text-style-3">PROJECTS</a>
      <a href="/en/about" class="item base-text text-style-3">ABOUT</a>
      <a href="/en/contacts" class="item base-text text-style-3">CONTACTS</a>
    </div>
  </nav>
</template>

<script lang="ts" setup></script>

<style>
.contatti {
  widows: 100%;
  background-image: url("../../assets/about-bg.png");
  background-size: cover;
  background-position: center 60%;
  border-image: fill 1
    linear-gradient(var(--color-overlay), var(--color-overlay));
}

.base-text {
  font-size: clamp(1rem, 1.3vw, 3.5rem);
}

@media screen and (max-width: 768px) {
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
