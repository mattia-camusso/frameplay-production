<template>
  <div class="w-full flex justify-center">
    <h3 class="text-c-3 text-style-not-big">
      OUR <span class="text-c-1">CLIENTS</span>
    </h3>
  </div>
  <div class="scroller md:py-16">
    <div class="tag-list scroller-inner">
      <img
        v-for="el in elems"
        class="scroll-item img"
        :src="`/clients/${el}.png`"
        alt="cliente"
      />
    </div>
  </div>
</template>

<script lang="js" setup>
import { onMounted } from "vue";
const elems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let scrollers;
onMounted(() => {
  scrollers = document.querySelectorAll(".scroller");
  addAnimation();
});

const addAnimation = () => {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller-inner");
    const scrollerItems = Array.from(scrollerInner.children);

    scrollerItems.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", "true");
      scrollerInner.appendChild(duplicatedItem);
    });
  });
};
</script>

<style scoped>
.scroller {
  max-width: 100%;
  overflow: hidden;
  mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
  -webkit-mask: linear-gradient(
    90deg,
    transparent,
    white 10%,
    white 90%,
    transparent
  );
}

@keyframes inner-scroll {
  to {
    transform: translate(calc(-50% - 0.5rem));
  }
}
@-webkit-keyframes inner-scroll {
  to {
    transform: translate(calc(-50% - 0.5rem));
  }
}

.scroller-inner {
  flex-wrap: wrap;
  display: flex;
  gap: 1rem;
  width: max-content;
  flex-wrap: nowrap !important;
  animation: inner-scroll 20s linear infinite;
  -webkit-animation: inner-scroll 30s linear infinite;
}

.scroll-item {
  padding: 0 2rem;
}

.img {
  width: 200px;
  object-fit: contain;
  filter: invert(100%);
}

@media screen and (max-width: 768px) {
  .img {
    width: 170px;
  }
}
</style>
