// uno.config.ts
import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  shortcuts: [
    { 'flex-center': 'flex justify-center items-center' },
    { 'color-active': 'hover:fill-active hover:color-active' },
    {
      'bgt-1': 'hover:bg-gradient-to-r hover:from-[#e5e5e5] hover:to-[#ffffff]' // 渐变色背景
    },
    {
      'text-one-none': 'block text-ellipsis whitespace-nowrap overflow-hidden' // 文本溢出隐藏，需要设置宽度
    }
  ],

  theme: {
    colors: {
      active: '#e83e8c'
    }
  },

  presets: [presetUno()]
});
