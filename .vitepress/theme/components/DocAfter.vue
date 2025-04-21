<script setup>
import { ref, watch } from 'vue'
import { useRoute, useData } from 'vitepress'
import Giscus from '@giscus/vue'

const route = useRoute()
const { isDark } = useData()
const giscusKey = ref(true)

watch(route, () => {
  giscusKey.value = !giscusKey.value
})

// https://github.com/Hyk260/pure-chat-docs-giscus
</script>

<template>
  <div class="mt-8">
    <Giscus
      :key="giscusKey"
      host="https://giscus.app"
      repo="Hyk260/pure-chat-docs-giscus"
      repoId="R_kgDOObmzEA"
      category="General"
      categoryId="DIC_kwDOObmzEM4CpONq"
      :theme="isDark ? 'dark' : 'light'"
      lang="zh-CN"
      loading="lazy"
      strict="1"
      mapping="title"
      crossorigin="anonymous"
    />
  </div>
</template>
