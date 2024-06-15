<template>
  <div class="hero">
    <div
      class="h-full w-full flex flex-col items-center justify-between pt-[16vh] pb-[8vh]"
    >
      <img
        src="../assets/logo.svg"
        class="max-w-[90vw]"
        alt="Frameplay Production Logo Svg"
      />
      <div class="flex flex-col items-center">
        <h1 class="text-style-1 leading-relaxed font-semibold text-c-1 pb-6">
          WORK IN PROGRESS...
        </h1>
        <div class="flex w-full justify-evenly">
          <a href="" class="social-link"
            ><!-- <Email></Email> -->
            <img
              src="../assets/mail.svg"
              alt="Frameplay Production Email"
              class="h-8 md:h-10 lg:h-12 3xl:h-16"
            />
          </a>
          <a href="" class="social-link">
            <!-- <Linkedin></Linkedin> -->
            <img
              src="../assets/linkedin.svg"
              alt="Frameplay Production Linkedin"
              class="h-8 md:h-10 lg:h-12 3xl:h-16"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
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
