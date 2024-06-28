<template>
  <div>{{ project.attributes.title }}</div>
</template>

<script lang="ts" setup>
const project = await $fetch(`http://localhost:1337/api/projects/${1}`, {
  headers: {
    Authorization:
      "Bearer 1d110544c3cd226b73f9292bb3186e16e53495489787879ac7469843f963dc9116bfb84a3c5928b9549405ee68c92adfeb79f3b307cf360f4ae8638c1990fa34501ac8bc1cebb17f91ac469b6522f364e79f02d9620f77ccb6e55f48eefa184cdd5f4deb837995447fd5096e24818382b63dc527de55515f43346ff8a7ecf034",
  },
}).then((resp) => resp.data);
</script>

<style></style>
