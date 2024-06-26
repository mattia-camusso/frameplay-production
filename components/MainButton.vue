<template>
  <a :href="props.link">
    <button
      :class="width ? width : 'w-full'"
      class="relative hover:text-c-2 font-semibold py-3 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-c-1 after:w-full after:bottom-0 after:left-0 text-c-1"
    >
      <slot />
    </button>
  </a>
</template>

<script lang="ts" setup>
const props = defineProps({
  width: String,
  link: String,
});
</script>

<style></style>
