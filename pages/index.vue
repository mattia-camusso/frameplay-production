<template>
  <div class="hero">
    <div class="h-full w-full flex flex-col items-center justify-between py-8">
      <HeaderHome></HeaderHome>
      <img
        src="../assets/main-logo.svg"
        class="max-w-[90vw]"
        alt="Frameplay Production Logo Svg"
      />
      <p class="base-text text-style-3">
        AIUTIAMO BRAND E CREATOR A PIANIFICARE E PRODURRE CONTENUTI VIDEO DI
        QUALITA’
      </p>
    </div>
  </div>
  <Projects></Projects>
  <Footer></Footer>
</template>

<style scoped>
.hero {
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
