<template>
  <main
    class="flex flex-col items-center justify-between min-h-[100vh] about backdrop-blur-lg"
  >
    <div class="h-12"></div>
    <div class="flex flex-col items-center">
      <h2
        class="font-black italic mx-auto text-style-1 mt-16 md:mt-24 pb-8 md:pb-16"
      >
        ABOUT US
      </h2>
      <article
        class="text-style-3 px-4 sm:px-8 font-medium md:text-center text-pretty leading-snug"
      >
        We are Frame Play Production, your video production agency trust. We
        turn your ideas into amazing videos by delivering High-quality services
        to tell your story the power visual. From concept to post-production, we
        are here to bring the your projects with creativity and professionalism
      </article>
      <div class="my-16 flex flex-col md:flex-row gap-[5vmax]">
        <div class="flex flex-col justify-center items-center">
          <img
            src="../../assets/Gabriele.png"
            class="h-[25vmax] aspect-[5/4] object-cover rounded-md block"
            alt=""
          />
          <p class="pt-8 px-4 sm:px-8 text-center text-pretty text-style-3">
            <span class="font-bold"> Gabriele Siri </span>
            Videomaker, Drone Pilot, Colorist
          </p>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img
            src="../../assets/Danilo.png"
            class="h-[25vmax] aspect-[5/4] object-cover rounded-md block"
            alt=""
          />
          <p class="pt-8 px-4 sm:px-8 text-center text-pretty text-style-3">
            <span class="font-bold"> Danilo Calabrese </span>
            Senior Editor, Motion Graphics
          </p>
        </div>
      </div>
    </div>
    <EnFooter></EnFooter>
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "en-other",
});
</script>

<style scoped></style>
