import { test, expect, Page, BrowserContext } from '@playwright/test'

test.describe.serial('serial suite', () => {
  let page: Page
  let context: BrowserContext

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext()
    page = await context.newPage()
    await page.goto('https://playwright.dev/')
  })

  test.afterAll(async () => {
    await page.close()
    await context.close()
  })

  test('A', async () => {
    console.log('A')
    await page.waitForTimeout(1000)
  })

  test('B', async () => {
    console.log('B')
    await page.waitForTimeout(1000)
    const title = page.locator('.navbar__inner .navbar__title')
    await expect(title).toHaveText('Playwright')
  })
})
