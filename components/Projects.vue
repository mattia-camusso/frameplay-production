<template>
  <div
    class="absolute top-[40vh] left-[40vw] opacity-0 hover:opacity-100 font-style-big"
  >
    <h2>CULO</h2>
  </div>
  <div id="projects" class="project-layout px-4 md:px-12 py-32 md:py-64">
    <div v-for="project in projects">
      <img
        :src="project.cover"
        :alt="project.title"
        :class="`aspect-[${project.aspectRatio}]`"
        class="project-item grayscale hover:grayscale-0 transition-all duration-300 ease-linear"
      />
    </div>
  </div>
  <LogoScroller></LogoScroller>
</template>

<script lang="js" setup>
import {projects} from "../constants";
</script>

<style scoped>
.project-layout {
  list-style: none;
  column-gap: clamp(1rem, 2vw, 3rem);
  column-count: 4;
}

@media screen and (max-width: 768px) {
  .project-layout {
    column-count: 3;
  }
}

.project-item {
  width: 40vmax;
  margin-bottom: clamp(1rem, 2vw, 3rem);
  box-sizing: border-box;
  break-inside: avoid;
  border-radius: 10px;
}
</style>
