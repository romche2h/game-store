import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import sassDts from 'vite-plugin-sass-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sassDts({
      quietDeps: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
});
