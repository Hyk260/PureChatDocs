import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from "unocss";

export default defineConfig({
  presets: [presetUno(), presetIcons(), presetAttributify()],
  /**
   * 快捷键命名标准
   */
  shortcuts: {
    "wh-full": "w-full h-full",
    "flex-c": "flex justify-center items-center",
    "flex-sc": "flex justify-start items-center",
    "flex-ac": "flex justify-around items-center",
    "flex-bc": "flex justify-between items-center",
    "flex-ae": "flex justify-around items-end",
    "flex-ss": "flex justify-start items-start",
    truncate: "overflow-hidden text-ellipsis whitespace-nowrap",
  },
});
