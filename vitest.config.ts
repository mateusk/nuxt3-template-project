import { defineConfig } from 'vitest/config'
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    deps: {
      inline: [/@nuxt\/test-utils-edge/],
    },
  },
})
