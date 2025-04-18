<script setup>
import { onMounted, ref } from "vue";
import DefaultTheme from "vitepress/theme";
// import HomePage from "./components/HomePage.vue";
import DocAfter from "./components/DocAfter.vue";
import { useImageView } from "../utils/useImageView";
import { useToggleTheme } from "../utils/useToggleTheme";
import "uno.css";

const warehouse = ref({});
// 切换动画
useToggleTheme();
//  图片缩放
useImageView();

onMounted(() => {
  // fetch("https://api.github.com/repos/Hyk260/PureChat/releases/latest").then(
  //   (res) => {
  //     res
  //       .json()
  //       .then((data) => {
  //         warehouse.value = data;
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // );
});
</script>

<template>
  <DefaultTheme.Layout>
    <template #home-features-after>
      <!-- <HomePage /> -->
    </template>
    <template #doc-after>
      <DocAfter />
    </template>
  </DefaultTheme.Layout>
</template>

<style>
/* 图片遮挡 */
.medium-zoom-overlay {
  z-index: 999;
  --at-apply: "card-df-br";
}
.medium-zoom-image.medium-zoom-image--opened {
  z-index: 1000;
}
</style>
