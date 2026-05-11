<script setup lang="ts">
import { computed } from "vue";
import { useData, useRoute } from "vitepress";
import { badges } from "@/config/shields";
import { generateBadgeUrl } from "@/config/shields";

const data = useData();
const route = useRoute();

const layoutHome = computed(() => route.path === "/");
</script>

<template>
  <footer v-if="layoutHome" class="custom-footer">
    <div class="footer-container">
      <!-- License -->
      <div class="license">
        Released under the
        <a
          href="https://github.com/Hyk260/PureChatDocs/blob/main/LICENSE"
          target="_blank"
          rel="noopener noreferrer"
          class="license-link"
        >
          MIT License
        </a>
      </div>

      <!-- Copyright -->
      <div class="copyright">
        <span>Copyright © 2024-present </span>
        <a
          href="https://github.com/Hyk260"
          target="_blank"
          rel="noopener noreferrer"
          class="author-link"
        >
          Hyk260
        </a>
      </div>

      <!-- Badges -->
      <div class="badges">
        <a
          v-for="(badge, index) in badges"
          :key="index"
          :href="badge.link"
          target="_blank"
          rel="noopener noreferrer"
          class="badge-link"
        >
          <img
            :src="generateBadgeUrl(badge)"
            :alt="`${badge.label}: ${badge.message}`"
            class="badge-img"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.custom-footer {
  width: 100%;
  /* background-color: #1b1b1f; */
  padding: 2rem 1rem;
  border-top: 1px solid var(--vp-c-gutter);
}

.footer-container {
  max-width: 56rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
}

.copyright {
  text-align: center;
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
}

.author-link {
  color: #3eaf7c;
  transition: color 0.2s;
}

.author-link:hover {
  color: #4abf8a;
}

.badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}

.badge-link {
  display: inline-block;
  transition: opacity 0.2s;
}

.badge-link:hover {
  opacity: 0.8;
}

.badge-img {
  height: 1.25rem;
}

.license {
  text-align: center;
  color: var(--vp-c-text-2);
  font-size: 0.75rem;
}

.license-link {
  color: #3eaf7c;
  transition: color 0.2s;
}

.license-link:hover {
  color: #4abf8a;
}
</style>
