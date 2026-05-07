<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { useRoute, useData } from "vitepress";
import Giscus from "@giscus/vue";

const route = useRoute();
const { isDark } = useData();

const giscusTheme = computed(() => {
  // return isDark.value ? "dark_tritanopia" : "light_tritanopia";
  return isDark.value ? 'dark' : 'light'
});

// watch(isDark, (dark) => {
//   const iframe = document
//     .querySelector("giscus-widget")
//     ?.shadowRoot?.querySelector("iframe");

//   iframe?.contentWindow?.postMessage(
//     {
//       giscus: {
//         setConfig: { theme: dark ? "dark_tritanopia" : "light_tritanopia" },
//       },
//     },
//     "https://giscus.app",
//   );
// });

// https://github.com/Hyk260/pure-chat-docs-giscus
</script>

<template>
  <div class="doc-after mt-6">
    <Giscus
      :key="route.path"
      :theme="giscusTheme"
      id="comments"
      host="https://giscus.app"
      repo="Hyk260/pure-chat-docs-giscus"
      repoId="R_kgDOObmzEA"
      category="General"
      categoryId="DIC_kwDOObmzEM4CpONq"
      lang="zh-CN"
      loading="lazy"
      strict="1"
      mapping="title"
      crossorigin="anonymous"
    />
  </div>
</template>

<style>
.giscus {
  margin-top: 1.8em;
}
</style>
