<script setup lang="ts">
import { computed } from "vue";
import { localStg } from "../../utils/storage";

defineOptions({
  name: "DownloadLink"
});

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    default: "Window",
    validator: (value: string) => ["MacOS", "Window"].includes(value),
  },
  version: {
    type: String,
    default: "0.8.3",
  },
  source: {
    type: String,
    default: "gitcode",
    validator: (value: string) => ["github", "gitcode"].includes(value),
  }
});

const latestRelease = localStg.get("latestRelease");
const downloadSources = {
  github: "https://github.com/Hyk260/PureChat/releases",
  gitcode: "https://gitcode.com/Hyk260/PureChat/releases"
};

// <DownloadLink type="setup.exe" />
// <DownloadLink platform="Mac" type="arm64.dmg" />

/**
 * 移除版本号前的'v'前缀
 * @param version 版本号字符串
 * @returns 处理后的版本号
 */
const removeVPrefix = (version: string | null | undefined): string => {
  return version?.replace(/^v/, "") ?? "";
};

const currentVersion = computed(
  () => removeVPrefix(latestRelease?.tag_name) || props.version
);

const downloadUrl = computed(() => {
  const baseUrl = downloadSources[props.source as keyof typeof downloadSources];
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
.download-link {
  /* text-decoration: none; */
  /* color: inherit; */
  /* transition: color 0.2s ease; */
}
.download-link:hover {
  /* color: var(--primary-color); */
}
</style>
