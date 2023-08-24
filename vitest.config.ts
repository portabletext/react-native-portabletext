import reactNative from "vitest-react-native";
// this is needed for react jsx support
import react from "@vitejs/plugin-react";
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [reactNative(), react()],
})
