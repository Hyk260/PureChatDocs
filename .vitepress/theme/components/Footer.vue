<template>
  <footer class="VPFooter footer layout-bottom">
    <p v-html="footer.message"></p>
  </footer>
</template>

<script setup lang="ts">
import { footer } from "@/config/themeConfig";

</script>

<style scoped lang="scss">
.footer {
  padding: 20px 0;
  text-align: center;
  color: rgba(var(--vp-c-bg-reverse-rgb), 0.6);
}
</style>