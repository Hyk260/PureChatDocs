<script setup>
import { ref, watch } from "vue";
import { useRoute, useData } from "vitepress";
import Giscus from "@giscus/vue";

const route = useRoute();
const { isDark } = useData();
const giscusKey = ref(true);

watch(route, () => {
  giscusKey.value = !giscusKey.value;
});
</script>

<template>
  <div class="giscus">
    <Giscus
      :key="giscusKey"
      host="https://giscus.app"
      repo="Hyk260/pure-chat-docs-giscus"
      repoId="R_kgDOObmzEA"
      category="Q&A"
      categoryId="DIC_kwDOObmzEM4CpONr"
      :theme="isDark ? 'dark' : 'light'"
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
