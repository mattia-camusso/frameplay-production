<template>
  <HeaderOther></HeaderOther>
  <main
    class="flex flex-col items-center justify-between h-[100vh] md:h-[100vh] contatti backdrop-blur-lg"
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
          Gabriele Siri Videomaker, drone pilot, colorist <br />
          'Danilo Calabrese, senior editor, motion graphics'
        </article>
      </div>
    </div>
    <Footer></Footer>
  </main>
</template>

<script lang="ts" setup></script>

<style scoped></style>
