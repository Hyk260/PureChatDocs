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
const format = (date?: string | number | Date): string => {
  if (!date) return "";
  return dateFormatter.format(new Date(date)).replace(/\//g, "-");
};

const firstCommit = computed(() => format(frontmatter.value.firstCommit));
const lastUpdated = computed(() =>
  format(frontmatter.value.lastUpdated || page.value.lastUpdated),
);

const wordCount = ref("");
const pv = ref("♾️");

let observer: MutationObserver | null = null;

const getContentText = (): string => {
  const docDomContainer = document.querySelector("#VPContent");
  return docDomContainer?.querySelector(".content-container .main")?.textContent || "";
};

const updateWordCount = (): void => {
  wordCount.value = countTransK(countWord(getContentText()));
};

const initPVObserver = (): void => {
  const pvEl = document.getElementById("vercount_value_page_pv");
  if (!pvEl) return;

  const parseAndUpdatePV = (text: string): boolean => {
    const val = parseInt(text, 10);
    if (!isNaN(val)) {
      pv.value = countTransK(val);
      return true;
    }
    return false;
  };

  if (pvEl.textContent?.trim()) {
    if (parseAndUpdatePV(pvEl.textContent.trim())) {
      return;
    }
  }

  observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "childList" || mutation.type === "characterData") {
        const text = pvEl.textContent?.trim();
        if (text && parseAndUpdatePV(text)) {
          observer?.disconnect();
          break;
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

const handleMounted = (): void => {
  nextTick(() => {
    updateWordCount();
    initPVObserver();
  });
};

const handleUnmounted = (): void => {
  observer?.disconnect();
  observer = null;
};

const handlePageChange = (): void => {
  nextTick(() => {
    updateWordCount();
    pv.value = "...";
    observer?.disconnect();
    initPVObserver();
  });
};

onMounted(handleMounted);
onUnmounted(handleUnmounted);
watch(
  () => page.value.relativePath,
  handlePageChange,
);
</script>
