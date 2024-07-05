<template>
  <EnHeaderOther></EnHeaderOther>
  <main
    class="flex flex-col items-center justify-between h-[100vh] md:h-[100vh] contatti backdrop-blur-lg"
  >
    <div class="h-12"></div>
    <div class="flex flex-col items-center">
      <h2 class="font-black italic mx-auto text-style-1 pb-8 md:pb-16">
        ABOUT US
      </h2>
      <div class="flex justify-center gap-[5vw] items-center">
        <img
          src="../../assets/about-bg.png"
          class="h-[30vmax] aspect-[4/5] object-cover rounded-md hidden md:block"
          alt=""
        />
        <article
          class="base-text text-center text-balance md:text-left leading-snug w-4/5 md:w-[40%]"
        >
          We are FramePlayProduction, your video production agency trust. We
          turn your ideas into amazing videos by delivering High-quality
          services to tell your story the power visual. From concept to
          post-production, we are here to bring the your projects with
          creativity and professionalism
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
    <EnFooter></EnFooter>
  </main>
</template>

<script lang="ts" setup></script>

<style scoped></style>
