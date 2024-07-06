<template>
  <main
    class="flex flex-col items-center justify-between min-h-[100vh] about backdrop-blur-lg"
  >
    <div class="h-12"></div>
    <div class="flex flex-col items-center">
      <h2
        class="font-black italic mx-auto text-style-1 mt-16 md:mt-24 pb-8 md:pb-16"
      >
        CHI SIAMO
      </h2>
      <article
        class="text-style-3 font-medium px-8 text-center text-pretty leading-snug"
      >
        Siamo la FramePlayProduction, la vostra agenzia di produzione video di
        fiducia. Trasformiamo le vostre idee in video straordinari, offrendo
        servizi di alta qualità per raccontare la vostra storia il potere
        visivo. Dal concept alla post-produzione, siamo qui per dare vita ai
        tuoi progetti con creatività e professionalità
      </article>
      <div class="my-16 flex flex-col md:flex-row gap-[5vmax]">
        <div class="flex flex-col justify-center items-center">
          <img
            src="../assets/Gabriele.png"
            class="h-[25vmax] aspect-[5/4] object-cover rounded-md block"
            alt=""
          />
          <p class="pt-8 px-8 text-center text-pretty text-style-3">
            <span class="font-bold"> Gabriele Siri </span>
            Videomaker, Drone Pilot, Colorist
          </p>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img
            src="../assets/Danilo.png"
            class="h-[25vmax] aspect-[5/4] object-cover rounded-md block"
            alt=""
          />
          <p class="pt-8 px-8 text-center text-pretty text-style-3">
            <span class="font-bold"> Danilo Calabrese </span>
            Senior Editor, Motion Graphics
          </p>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </main>
</template>

<script setup>
definePageMeta({
  layout: "other",
});
</script>

<style scoped></style>
