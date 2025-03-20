<script setup>
import { integrations } from '../content'
import LinkGrid from './LinkGrid.vue'

defineOptions({
  name: "ContentIntegrations",
})
</script>

<template>
  <LinkGrid :items="integrations" />
</template>
