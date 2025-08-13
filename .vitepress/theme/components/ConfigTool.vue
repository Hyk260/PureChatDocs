<template>
  <div class="config-tool">
    <el-card class="config-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <h2>PureChat 链接生成器</h2>
          <p>输入你的 API Key 和 Base URL 来生成 PureChat 链接</p>
        </div>
      </template>
      
      <el-form :model="form" label-width="120px" class="config-form">
        <!-- 添加模式选择单选框 -->
        <el-form-item label="访问模式">
          <el-radio-group v-model="form.mode" class="mode-selector">
            <el-radio value="app">
              <el-icon><Monitor /></el-icon>
              应用模式
            </el-radio>
            <el-radio value="web">
              <el-icon><ChromeFilled /></el-icon>
              网页模式
            </el-radio>
          </el-radio-group>
        </el-form-item>
        
        <el-form-item label="API Key">
          <el-input
            v-model="form.apiKey"
            placeholder="请输入 API Key"
            type="password"
            show-password
            clearable
          >
            <template #prefix>
              <el-icon><Key /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        
        <el-form-item label="Base URL">
          <el-input
            v-model="form.baseURL"
            placeholder="请输入 Base URL (例如: https://aihubmix.com)"
            clearable
          >
            <template #prefix>
              <el-icon><Link /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        
        <el-form-item label="生成的链接">
          <el-input
            :value="generatedLink"
            readonly
            placeholder="链接将在这里显示"
          >
            <template #prefix>
              <el-icon><ChatDotRound /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        
        <el-form-item>
          <div class="button-group">
            <el-button 
              type="primary" 
              :icon="DocumentCopy"
              @click="copyLink"
              :disabled="!generatedLink"
            >
              复制链接
            </el-button>
            
            <el-button 
              type="success" 
              :icon="Position"
              @click="openLink"
              :disabled="!generatedLink"
            >
              跳转到链接
            </el-button>
            
            <el-button 
              type="info" 
              :icon="Refresh"
              @click="clearForm"
            >
              清空表单
            </el-button>
          </div>
        </el-form-item>
      </el-form>
    </el-card>
    
    <el-card class="preview-card" shadow="hover" v-if="generatedLink">
      <template #header>
        <h3>链接预览</h3>
      </template>
      <div class="link-preview">
        <el-tag :type="form.mode === 'app' ? 'primary' : 'success'" size="large">
          {{ generatedLink }}
        </el-tag>
        <!-- 添加模式说明 -->
        <div class="mode-info">
          <el-text size="small" type="info">
            {{ form.mode === 'app' ? '应用模式：使用 purechat:// 协议启动应用' : '网页模式：在浏览器中打开网页版' }}
          </el-text>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ElMessage } from 'element-plus'
import { 
  DocumentCopy, 
  Position, 
  Refresh, 
  Key, 
  Link, 
  ChatDotRound,
  Monitor,
  ChromeFilled,
} from '@element-plus/icons-vue'

const form = ref({
  apiKey: '',
  baseURL: '',
  mode: 'app' // 添加模式字段，默认为应用模式
})

const generatedLink = computed(() => {
  if (!form.value.apiKey || !form.value.baseURL) {
    return ''
  }
  
  const settings = {
    keyVaults: {
      openai: {
        apiKey: form.value.apiKey,
        baseURL: form.value.baseURL
      }
    }
  }
  
  const prefix = form.value.mode === 'app' 
    ? 'purechat://chat?' 
    : 'https://purechat.cn/chat?'
  
  return `${prefix}settings=${encodeURIComponent(JSON.stringify(settings))}`
})

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(generatedLink.value)
    ElMessage.success('链接已复制到剪贴板！')
  } catch (err) {
    ElMessage.error('复制失败，请手动复制')
  }
}

const openLink = () => {
  if (generatedLink.value) {
    window.open(generatedLink.value, '_blank')
    const modeText = form.value.mode === 'app' ? 'PureChat 应用' : 'PureChat 网页版'
    ElMessage.success(`正在跳转到 ${modeText}...`)
  }
}

const clearForm = () => {
  form.value.apiKey = ''
  form.value.baseURL = ''
  form.value.mode = 'app' // 清空时重置为默认模式
  ElMessage.info('表单已清空')
}
</script>

<style scoped>
.config-tool {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.config-card {
  margin-bottom: 20px;
}

.card-header {
  text-align: center;
}

.card-header h2 {
  margin: 0 0 10px 0;
  color: var(--el-color-primary);
}

.card-header p {
  margin: 0;
  color: var(--el-text-color-regular);
  font-size: 14px;
}

.config-form {
  margin-top: 20px;
}

.mode-selector {
  display: flex;
  align-items: center;
  gap: 20px;
}

.mode-selector .el-radio {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border: 2px solid var(--el-border-color);
  border-radius: 8px;
  transition: all 0.3s;
}

.mode-selector .el-radio:hover {
  border-color: var(--el-color-primary);
  background-color: var(--el-color-primary-light-9);
}

.mode-selector .el-radio.is-checked {
  border-color: var(--el-color-primary);
  background-color: var(--el-color-primary-light-8);
}

.button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.preview-card {
  border: 2px dashed var(--el-color-primary);
}

.link-preview {
  text-align: center;
  padding: 10px;
}

.link-preview .el-tag {
  word-break: break-all;
  white-space: normal;
  line-height: 1.5;
  padding: 12px 16px;
}

.mode-info {
  margin-top: 12px;
  padding: 8px;
  background-color: var(--el-fill-color-lighter);
  border-radius: 6px;
}

@media (max-width: 768px) {
  .config-tool {
    padding: 10px;
  }
  
  .mode-selector {
    flex-direction: column;
    gap: 12px;
  }
  
  .button-group {
    flex-direction: column;
  }
  
  .button-group .el-button {
    width: 100%;
  }
}
</style>
