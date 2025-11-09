import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ui from "@nuxt/ui/vite";

export default defineConfig({
  plugins: [
    vue(),
    ui({
      ui: {
        pagination: {
          slots: {
            root: "pagination__root",
            list: "pagination__list",
            ellipsis: "pagination__ellipsis",
            label: "pagination__label",
            first: "pagination__directional",
            prev: "pagination__directional",
            item: "pagination__item",
            next: "pagination__directional",
            last: "pagination__directional",
          },
        },
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/_index.scss" as *;`,
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
