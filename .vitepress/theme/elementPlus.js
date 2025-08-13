import {
  ElInput,
  ElCard,
  ElTag,
  ElForm,
  ElFormItem,
  ElButton,
  ElIcon,
  ElText,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
} from "element-plus";
// 导入 Element Plus 样式
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";

const components = [ElInput, ElCard, ElTag, ElForm, ElFormItem, ElButton, ElIcon, ElRadioGroup, ElRadio, ElRadioButton,ElText];

export function useElementPlus(app) {
  components.forEach((component) => {
    app.component(component.name, component);
  });
}
