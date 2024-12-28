import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: "jsm-pk",
      project: "javascript-react",
      telemetry: false // Disable telemetry data collection
    })
  ],

  build: {
    sourcemap: true
  }
});
