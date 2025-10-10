<script setup>
import { onMounted } from "vue";
import DefaultTheme from "vitepress/theme";
// import HomePage from "./components/HomePage.vue";
import DocAfter from "./components/DocAfter.vue";
// import AsideSponsors from "./components/AsideSponsors.vue";
// import { useImageView } from "../utils/useImageView";
import { fetchLatestRelease } from "../utils/common";
import { useToggleTheme } from "../utils/useToggleTheme";

import "uno.css";

// 切换动画
useToggleTheme();
//  图片缩放
// useImageView();

onMounted(() => {
  fetchLatestRelease();
});
</script>

<template>
  <DefaultTheme.Layout>
    <template #aside-ads-before>
      <!-- <AsideSponsors /> -->
    </template>
    <template #home-features-after>
      <!-- <HomePage /> -->
    </template>
    <template #doc-after>
      <DocAfter />
    </template>
    <template #nav-bar-content-after> </template>
    <template #nav-screen-content-after> </template>
  </DefaultTheme.Layout>
</template>

<style>
/* .medium-zoom-overlay {
  z-index: 999;
  --at-apply: "card-df-br";
}
.medium-zoom-image.medium-zoom-image--opened {
  z-index: 1000;
} */

.fancybox__container {
  --fancybox-bg: none;
  .fancybox__toolbar {
    --f-button-bg: none;
    --f-button-hover-bg: rgba(var(--vp-c-bg-reverse-rgb), 0.1);
    --f-button-color: rgba(var(--vp-c-bg-reverse-rgb), 1);
    --f-button-hover-color: rgba(var(--vp-c-bg-reverse-rgb), 1);
    --f-button-svg-disabled-opacity: 0.2;
    background: rgba(var(--vp-c-bg-rgb), 0.2);
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: rgba(var(--vp-c-bg-rgb), 0.5);
    opacity: 0.96;
    backdrop-filter: blur(10px);
  }
}
.fancybox-image {
  object-fit: initial;
}
.is-classic .is-nav-selected .f-thumbs__slide__button::after {
  border-color: var(--weiz-primary-color);
}
.fancybox__caption {
  color: var(--vp-c-text-1);
}
</style>
