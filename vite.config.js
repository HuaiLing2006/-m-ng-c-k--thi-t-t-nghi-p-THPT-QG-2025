import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://www.facebook.com/l3RuanHuaiLing25072006/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
