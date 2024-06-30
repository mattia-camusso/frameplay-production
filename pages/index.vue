<template>
  <!--   <video autoplay muted loop class="video">
    <source src="../assets/hero.mp4" type="video/mp4" />
  </video> -->
  <div class="hero">
    <div class="h-full w-full flex flex-col items-center justify-between p-8">
      <HeaderHome class="header"></HeaderHome>
      <img
        src="../assets/main-logo.svg"
        class="max-w-[90vw]"
        alt="Frameplay Production Logo Svg"
      />
      <p class="base-text text-center text-pretty text-style-3">
        AIUTIAMO BRAND E CREATOR A PIANIFICARE E PRODURRE CONTENUTI VIDEO DI
        QUALITA’
      </p>
    </div>
  </div>
  <Projects></Projects>
  <Footer></Footer>
</template>

<style scoped>
.video {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}
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

.header {
  --_animationStartsAfter: 700px;
  --_animationRange: 250px;

  animation: stickyNav linear forwards;
  animation-timeline: view();
  animation-range-start: calc(100vh + var(--_animationStartsAfter));
  animation-range-end: calc(
    100vh + var(--_animationStartsAfter) + var(--_animationRange)
  );

  top: -1rem;
  position: sticky;
}

@keyframes stickyNav {
  100% {
    top: 0;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
}
@-webkit-keyframes stickyNav {
  100% {
    top: 0;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
}
</style>
