import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import {viteCommonjs, esbuildCommonjs} from '@originjs/vite-plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteCommonjs(), react()],
  define: {
    global: 'window',
  },
  optimizeDeps: {
    include: ['@react-navigation/native'],
    esbuildOptions: {
      mainFields: ['module', 'main'],
      resolveExtensions: ['.web.js', '.js', '.ts'],
      plugins: [esbuildCommonjs(['@react-navigation/elements'])],
    },
  },
  resolve: {
    extensions: ['.web.tsx', '.web.jsx', '.web.js', '.tsx', '.ts', '.js'],
    alias: {
      'react-native': 'react-native-web',
    },
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});