<template>
  <div id="confetti-container"></div>
</template>

<script setup lang="ts">
import confetti from "canvas-confetti";

defineOptions({
  name: "Confetti",
});

confetti({
  particleCount: 100,
  spread: 170,
  origin: { y: 0.6 },
});
</script>