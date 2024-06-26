<template>
  <div class="not-found">
    <div
      class="h-full w-full flex flex-col items-center justify-between pt-[16vh] pb-[8vh]"
    >
      <img
        src="../assets/main-logo.svg"
        class="max-w-[90vw]"
        alt="Frameplay Production Logo Svg"
      />
      <div class="flex flex-col items-center">
        <h1 class="text-style-1 leading-relaxed font-semibold text-c-1 pb-6">
          PAGINA NON TROVATA
        </h1>
        <MainButton link="/">TORNA ALLA HOME</MainButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: 90% center;
  background-repeat: no-repeat;
  background-image: url("../assets/hero.png");
  border-image: fill 1
    linear-gradient(var(--color-overlay), var(--color-overlay));
}
</style>
