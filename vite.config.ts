import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const { VITE_BASE_URL } = loadEnv(mode, process.cwd());

  return {
    base: VITE_BASE_URL,

    plugins: [react()],

    css: {
      preprocessorOptions: {
        less: {
          math: 'always',
          charset: true,
          additionalData: '@import "@/style/variable.less";'
        }
      }
    },

    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '@types': resolve(__dirname, './src/types')
      }
    }
  };
});
