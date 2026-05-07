<template>
  <div
    v-show="isDev"
    class="text-text2 flex flex-wrap items-center gap-2 pt-4 pb-4 text-sm leading-relaxed font-medium break-keep md:gap-4"
  >
    <div v-if="firstCommit" class="flex items-center" title="发表于">
      <i class="icon icon-created bg-text2 mr-1" />
      <span>发表于 {{ firstCommit }}</span>
    </div>
    <div class="flex items-center" title="更新于">
      <i class="icon icon-updated bg-text2 mr-1" />
      <span>更新于 {{ lastUpdated }}</span>
    </div>
    <div class="flex items-center" title="字数">
      <i class="icon icon-word bg-text2 mr-1" />
      <span>总字数 {{ wordCount }}</span>
    </div>
    <div class="flex items-center" title="阅读量">
      <i class="icon icon-user bg-text2 mr-1" />
      <span>
        <span>阅读量 {{ pv }}</span>
        <span id="vercount_value_page_pv" class="hidden" />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useData } from "vitepress";
import { ref, onMounted, computed, onUnmounted, nextTick, watch } from "vue";
import { countWord, countTransK, formatDate } from "@/utils/tools";

const { frontmatter, page } = useData();

const isDev = import.meta.env.DEV;

const dateFormatter = formatDate();
const format = (date?: string | number | Date) => {
  if (!date) return "";
  return dateFormatter.format(new Date(date)).replace(/\//g, "-");
};

const firstCommit = computed(() => format(frontmatter.value.firstCommit));
const lastUpdated = computed(() =>
  format(frontmatter.value.lastUpdated || page.value.lastUpdated),
);

const wordCount = ref("");
const updateWordCount = () => {
  const docDomContainer = document.querySelector("#VPContent");
  const content =
    docDomContainer?.querySelector(".content-container .main")?.textContent ||
    "";
  wordCount.value = countTransK(countWord(content));
};

const pv = ref("♾️");
let observer: MutationObserver | null = null;

const initPVObserver = () => {
  const pvEl = document.getElementById("vercount_value_page_pv");
  if (!pvEl) return;

  if (pvEl.textContent && pvEl.textContent.trim()) {
    const val = parseInt(pvEl.textContent.trim());
    if (!isNaN(val)) {
      pv.value = countTransK(val);
      return;
    }
  }

  observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "childList" || mutation.type === "characterData") {
        const text = pvEl.textContent?.trim();
        if (text) {
          const val = parseInt(text);
          if (!isNaN(val)) {
            pv.value = countTransK(val);
            observer?.disconnect();
          }
        }
      }
    }
  });

  observer.observe(pvEl, {
    childList: true,
    characterData: true,
    subtree: true,
  });
};

onMounted(() => {
  nextTick(() => {
    updateWordCount();
    initPVObserver();
  });
});

onUnmounted(() => {
  observer?.disconnect();
});

watch(
  () => page.value.relativePath,
  () => {
    nextTick(() => {
      updateWordCount();
      pv.value = "...";
      observer?.disconnect();
      initPVObserver();
    });
  },
);
</script>
