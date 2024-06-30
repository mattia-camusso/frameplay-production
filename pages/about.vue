<template>
  <nav
    class="absolute flex items-start justify-center sm:justify-between z-5 p-8 md:py-12 md:px-10 top-0 left-0 w-[100vw]"
  >
    <img
      src="../assets/logo.svg"
      class="md:h-16 h-8 hidden sm:block"
      alt="Frameplay Production Logo"
    />
    <div class="flex header 2xl:gap-24 gap-12">
      <a href="/" class="item base-text text-style-3">LAVORI</a>
      <a href="/about" class="item base-text text-style-3">ABOUT</a>
      <a href="/contatti" class="item base-text text-style-3">CONTATTI</a>
    </div>
  </nav>
  <main
    class="flex flex-col items-center justify-between h-[100vh] md:h-[130vh] contatti backdrop-blur-lg"
  >
    <div class="h-12"></div>
    <div class="flex flex-col items-center">
      <h2 class="font-black italic mx-auto text-style-1 pb-8 md:pb-16">
        CHI SIAMO
      </h2>
      <div class="flex justify-center gap-[5vw] items-center">
        <img
          src="../assets/about-bg.png"
          class="h-[30vmax] aspect-[4/5] object-cover rounded-md hidden md:block"
          alt=""
        />
        <article
          class="base-text text-center md:text-left leading-snug w-4/5 md:w-[30%] lg:w-1/4"
        >
          Sezione chi siamo, da inserire un breve paragrafo autobiografico su
          frameplay production. Nulla di troppo elaborato, giusto una
          descrizione sintetica sulla storia dell’azienda e la sua filosofia
          lavorativa. Sezione chi siamo, da inserire un breve paragrafo
          autobiografico su frameplay production. Nulla di troppo elaborato,
          giusto una descrizione sintetica sulla storia dell’azienda e la sua
          filosofia lavorativa.
        </article>
      </div>
    </div>
    <Footer></Footer>
  </main>
</template>

<script lang="ts" setup></script>

<style scoped>
.contatti {
  widows: 100%;
  background-image: url("../assets/about-bg.png");
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
