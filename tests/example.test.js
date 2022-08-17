import { describe, expect, it } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'
import { fileURLToPath } from 'node:url'

describe('pages', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./', import.meta.url)),
    server: true,
    browser: true,
    configFile: 'nuxt.config.ts',
  })

  it('Renders index page and checks if components render', async () => {
    const html = await $fetch('/')

    // Should render h1 text
    expect(html).toContain('Hello World')

    // Should render components
    expect(html).toContain('<nav class="nav-container"')
    expect(html).toContain('<div class="container"')
  })
})
