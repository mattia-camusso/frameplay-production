<template>
  <EnHeaderOther></EnHeaderOther>
  <main
    class="flex flex-col items-center justify-between contatti backdrop-blur-lg"
  >
    <div
      class="h-full w-full flex flex-grow flex-col items-center justify-between py-8"
    >
      <div class="h-1/6"></div>
      <div class="flex flex-col items-center gap-8">
        <h3 class="text-c-3 font-medium text-style-4">EMAIL</h3>
        <a href="mailto:production@frameplayvideo.com" target="_blank">
          <h3 class="text-style-4 item">Production@FramePlayvideo.com</h3>
        </a>
      </div>
      <div class="flex w-2/3 pb-8 justify-evenly">
        <a
          href="mailto:production@frameplayvideo.com"
          target="_blank"
          class="social-link"
          ><!-- <Email></Email> -->
          <img
            src="../../assets/mail.svg"
            alt="Frameplay Production Email"
            class="h-8 md:h-10 lg:h-12 3xl:h-16"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/frameplay-production"
          target="_blank"
          class="social-link"
        >
          <!-- <Linkedin></Linkedin> -->
          <img
            src="../../assets/linkedin.svg"
            alt="Frameplay Production Linkedin"
            class="h-8 md:h-10 lg:h-12 3xl:h-16"
          />
        </a>
      </div>
    </div>
    <EnFooter></EnFooter>
  </main>
</template>

<script lang="ts" setup></script>

<style scoped>
.contatti {
  height: 100vh;
  widows: 100%;
  background-image: url("../../assets/contatti-bg.png");
  background-size: cover;
  background-position: center 60%;
  border-image: fill 1
    linear-gradient(var(--color-overlay-dark), var(--color-overlay-dark));
}

.base-text {
  font-size: clamp(1rem, 1.3vw, 3.5rem);
}

.item {
  cursor: pointer;
  width: fit-content;
  display: block;
  text-decoration: none;
  transition: all 400ms var(--cubic-bezier);
}

.item::after {
  content: "";
  display: block;
  width: 0%;
  margin-top: 4px;
  height: 0.2rem;
  @apply bg-c-1;
}

.item:hover::after {
  width: 100%;
  transition: width 800ms var(--cubic-bezier);
}
.item:not(:hover)::after {
  width: 0%;
  transition: width 800ms var(--cubic-bezier);
}

@media screen and (max-width: 768px) {
}
</style>
