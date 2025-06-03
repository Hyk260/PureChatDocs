<script setup>
import { onMounted } from "vue";
import DefaultTheme from "vitepress/theme";
// import HomePage from "./components/HomePage.vue";
import DocAfter from "./components/DocAfter.vue";
// import AsideSponsors from "./components/AsideSponsors.vue";
import { useImageView } from "../utils/useImageView";
import { fetchLatestRelease } from '../utils/common';
import { useToggleTheme } from "../utils/useToggleTheme";
// import { NolebaseEnhancedReadabilitiesMenu, NolebaseEnhancedReadabilitiesScreenMenu } from '@nolebase/vitepress-plugin-enhanced-readabilities/client';
import "uno.css";

// 切换动画
useToggleTheme();
//  图片缩放
useImageView();

onMounted(() => {
  fetchLatestRelease()
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
    <template #nav-bar-content-after>
      <!-- <NolebaseEnhancedReadabilitiesMenu /> -->
    </template>
    <template #nav-screen-content-after>
      <!-- <NolebaseEnhancedReadabilitiesScreenMenu /> -->
    </template>
  </DefaultTheme.Layout>
</template>

<style>
.medium-zoom-overlay {
  z-index: 999;
  --at-apply: "card-df-br";
}
.medium-zoom-image.medium-zoom-image--opened {
  z-index: 1000;
}
</style>
