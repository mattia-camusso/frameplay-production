<template>
  <HeaderOther></HeaderOther>
  <div class="project-main" :class="`bg-${currentProject.id}`">
    <div>
      <h2
        class="text-c-1 text-wrap text-center text-style-big font-black italic"
      >
        {{ currentProject.fullTitle.toUpperCase() }}
      </h2>
      <h3
        class="text-c-1 text-wrap text-center md:text-right text-style-1 font-medium"
      >
        {{ currentProject.description }}
      </h3>
    </div>
  </div>
</template>

<script setup>
import { projects } from "../constants";
import { useRoute } from "vue-router";

definePageMeta({
  middleware: ["projects"],
});

const route = useRoute();

const currentProject = ref("");

currentProject.value = projects.find(
  (element) => element.id === route.params.id
);

const otherProjects = ref("");

otherProjects.value = projects.filter(
  (element) => element.id !== route.params.id
);
</script>

<style></style>
