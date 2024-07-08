<template>
  <video autoplay muted loop playsinline class="video lg:absolute lg:top-0">
    <source src="../assets/hero.mp4" type="video/mp4" />
  </video>
  <div class="lg:aspect-video lg:w-full"></div>
  <Projects></Projects>
  <Footer></Footer>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "main",
});
</script>

<style scoped>
.video {
  right: 0;
  width: 100vw;
  aspect-ratio: 16/9;
}
</style>
