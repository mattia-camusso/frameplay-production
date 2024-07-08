<template>
  <div
    id="projects"
    class="project-layout px-4 md:px-12 pb-32 pt-16 md:pt-32 md:pb-64"
  >
    <a
      :href="`/projects/${project.id}`"
      v-for="project in projects"
      class="img-container cursor-pointer contento"
    >
      <img
        loading="lazy"
        :src="project.cover"
        :alt="project.title"
        :class="`aspect-[${project.aspectRatio}]`"
        class="project-item"
      />
      <div class="content-overlay"></div>
      <div class="content-details fadeIn-right">
        <h2
          class="hidden md:block text-style-3 font-black italic text-pretty mb-8"
        >
          {{ project.title.toUpperCase() }}
        </h2>
      </div>
    </a>
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

.contento {
  position: relative;
  margin: auto;
  overflow: clip;
}

.contento .content-overlay {
  background: rgba(0, 0, 0, 0.75);
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.6s var(--cubic-bezier) 0s;
  -moz-transition: all 0.6s var(--cubic-bezier) 0s;
  transition: all 0.6s var(--cubic-bezier) 0s;
}

.contento:hover .content-overlay {
  opacity: 1;
}

.content-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -20%);
  -moz-transform: translate(-50%, -20%);
  transform: translate(-50%, -20%);
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.contento:hover .content-details {
  top: 50%;
  left: 50%;
  opacity: 1;
}

.fadeIn-right {
  left: 80%;
}
</style>
