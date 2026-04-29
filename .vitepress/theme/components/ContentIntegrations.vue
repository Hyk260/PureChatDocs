<script setup>
import { integrations } from '@/utils/content'
import LinkGrid from './LinkGrid.vue'

defineOptions({
  name: "ContentIntegrations",
})
</script>

<template>
  <LinkGrid :items="integrations" />
</template>
