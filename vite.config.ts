import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import UnoCSS from 'unocss/vite';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const { VITE_BASE_URL } = loadEnv(mode, process.cwd());

  return {
    base: VITE_BASE_URL,

    plugins: [react(), UnoCSS()],

    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    }
  };
});
