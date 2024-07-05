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
          class="base-text text-center text-balance md:text-left leading-snug w-4/5 md:w-[40%]"
        >
          Siamo la FramePlayProduction, la vostra agenzia di produzione video di
          fiducia. Trasformiamo le vostre idee in video straordinari, offrendo
          servizi di alta qualità per raccontare la vostra storia il potere
          visivo. Dal concept alla post-produzione, siamo qui per dare vita ai
          tuoi progetti con creatività e professionalità
          <p class="pt-8">
            <span class="font-bold"> Gabriele Siri </span>
            Videomaker, Drone Pilot, Colorist
          </p>
          <p class="pt-8">
            <span class="font-bold"> Danilo Calabrese </span>
            Senior Editor, Motion Graphics
          </p>
        </article>
      </div>
    </div>
    <Footer></Footer>
  </main>
</template>

<script lang="ts" setup></script>

<style scoped></style>
