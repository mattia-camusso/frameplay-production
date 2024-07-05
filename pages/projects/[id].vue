<template>
  <EnHeaderOther></EnHeaderOther>
  <img
    class="w-full absolute object-cover h-[40vh] md:h-[80vh] bg-overlay-dark"
    :src="currentProject.pic[2]"
  />
  <div
    class="relative h-[40vh] md:h-[80vh] flex flex-col justify-end items-center bg-overlay"
  >
    <h1
      class="text-c-1 text-center text-pretty text-style-big md:w-1/2 md:mb-24 mb-12 font-black italic"
    >
      {{ currentProject.fullTitle.toUpperCase() }}
    </h1>
  </div>
  <article
    class="px-8 md:px-12 flex flex-col text-center my-24 gap-12 md:gap-24"
  >
    <h2 class="text-c-1 text-wrap text-style-1 font-medium">
      {{ currentProject.en.description.toUpperCase() }}
    </h2>
    <p class="text-style-4">{{ currentProject.en.par1 }}</p>
    <p class="text-style-4">{{ currentProject.en.par2 }}</p>
  </article>

  <div
    class="flex w-full mb-24 md:mb-48"
    :class="
      currentProject.aspectRatio === '16/9'
        ? 'flex-col md:gap-12 gap-24'
        : 'flex-row justify-between'
    "
  >
    <img
      v-for="pic in 3"
      class="object-contain object-top"
      :class="[
        currentProject.aspectRatio === '16/9'
          ? 'lg:h-[70vh] w-full'
          : 'w-[30vw] h-full',
        ,
        `aspect-[${currentProject.aspectRatio}]`,
      ]"
      :src="currentProject.pic[pic - 1]"
      alt=""
    />
  </div>
  <div
    class="flex items-center px-8 md:px-12 mb-24 gap-12 md:gap-36"
    :class="
      currentProject.aspectRatio === '16/9'
        ? 'flex-col-reverse'
        : 'md:flex-row flex-col-reverse text-left'
    "
  >
    <img
      class="object-contain"
      :class="[
        currentProject.aspectRatio === '16/9' ? 'w-[70vmax]' : 'h-[40vmax]',
        currentProject.aspectRatio === '4/5' ? 'rounded-lg w-full' : '',
      ]"
      :src="
        currentProject.screen ? currentProject.screen : currentProject.pic[1]
      "
      alt=""
    />
    <div>
      <p class="text-style-4">{{ currentProject.en.par3 }}</p>
      <p v-if="currentProject.link" class="text-style-4 mt-12">
        Link al lavoro:
        <a
          :href="currentProject.link"
          target="_blank"
          class="hover:text-c-4 transition-all ease-linear"
          >{{ currentProject.link }}</a
        >
      </p>
    </div>
  </div>
  <Footer></Footer>
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
