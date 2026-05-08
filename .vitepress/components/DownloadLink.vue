<script setup lang="ts">
import { computed } from "vue";
import { localStg } from "@/utils/storage";

import type { GitHubRelease } from "@/utils/common";

defineOptions({
  name: "DownloadLink",
});

// <DownloadLink type="setup.exe" />
// <DownloadLink platform="Mac" type="arm64.dmg" />

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    default: "Window",
    // validator: (value: string) => ["MacOS", "Window"].includes(value || ""),
  },
  version: {
    type: String,
    default: "0.8.3",
  },
  source: {
    type: String,
    default: "gitcode",
    validator: (value: string) => ["github", "gitcode"].includes(value),
  },
});

const latestRelease = localStg.get("githubLatestRelease") as GitHubRelease | null;
const downloadSources = {
  github: "https://github.com/Hyk260/PureChat/releases",
  gitcode: "https://gitcode.com/Hyk260/PureChat/releases",
};

const removeVPrefix = (version?: string): string => {
  return version?.replace(/^v/, "") ?? "";
};

const currentVersion = computed(() => {
  return removeVPrefix(latestRelease?.tag_name) || props.version;
});

const downloadUrl = computed(() => {
  const baseUrl = downloadSources[props.source];
  return `${baseUrl}/download/v${currentVersion.value}/PureChat-${currentVersion.value}-${props.type}`;
});
</script>

<template>
  <a
    :href="downloadUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="download-link"
  >
    PureChat-{{ currentVersion }}-{{ type }}
  </a>
</template>

<style scoped>
/* .download-link {
  text-decoration: none;
  color: inherit;
  transition: color 0.2s ease;
}
.download-link:hover {
  color: var(--primary-color);
} */
</style>
