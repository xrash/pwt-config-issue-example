import { test as base, expect, Page } from '@playwright/test'

const test = base.extend<{}, {
  playwrightPage: Page
}>({
  playwrightPage: [async ({ browser }, use) => {
    const ctx = await browser.newContext()

    const playwrightPage = await ctx.newPage()
    await playwrightPage.goto('https://playwright.dev/')

    await use(playwrightPage)

    await playwrightPage.close()
    await ctx.close()

  }, { scope: 'worker', auto: true }],
})

test('A', async ({ playwrightPage }) => {
  console.log('A')
  await playwrightPage.waitForTimeout(1000)
})

test('B', async ({ playwrightPage }) => {
  console.log('B')
  await playwrightPage.waitForTimeout(1000)
  const title = playwrightPage.locator('.navbar__inner .navbar__title')
  await expect(title).toHaveText('Playwright')
})
