<template>
  <a :href="deployLink" class="inline-block mt-4" target="_blank" rel="noreferrer">
    <img :src="vercelButtonImage" class="disabled-img-view" alt="Deploy to Vercel" />
  </a>
</template>

<script setup lang="ts">
defineOptions({
  name: "DeployButton",
})

const VERCEL_BASE_URL = 'https://vercel.com/new/clone';
const DEFAULT_REPO_URL = 'https://github.com/Hyk260/PureChat';
const IMAGE_URL = 'https://vercel.com/button';

interface VercelDeployParams {
  repositoryUrl: string;
  env: string[];
  projectName: string;
  repositoryName: string;
}

const generateVercelDeployLink = (params: Partial<VercelDeployParams> = {}): string => {
  const mergedParams: VercelDeployParams = {
    repositoryUrl: DEFAULT_REPO_URL,
    env: ['ENABLE_EXPERIMENTAL_COREPACK', 'VITE_IM_SDK_APPID', 'VITE_SERVICE_BASE_URL', "VITE_LOCAL_MODE"],
    projectName: 'pure-chat',
    repositoryName: 'pure-chat',
    ...params
  };

  const searchParams = new URLSearchParams({
    'repository-url': mergedParams.repositoryUrl,
    'project-name': mergedParams.projectName,
    'repository-name': mergedParams.repositoryName
  });

  // 处理数组类型的环境变量参数
  mergedParams.env.forEach((value) => {
    searchParams.append('env', value);
  });

  return `${VERCEL_BASE_URL}?${searchParams.toString()}`;
};

const vercelButtonImage = IMAGE_URL;
const deployLink = generateVercelDeployLink();
</script>

<style scoped>
.disabled-img-view {
  display: block;
  max-width: 100%;
  height: auto;
}
</style>
