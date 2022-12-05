import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueTypeImports from "vite-plugin-vue-type-imports"; // todo:later: https://github.com/vuejs/core/issues/4294

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueTypeImports()],
});
