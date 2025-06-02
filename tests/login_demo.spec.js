import { test, expect } from '@playwright/test';

test('Demo login 1', async ({ page }) => {
    await page.goto('https://demo.applitools.com/');
    await page.pause();
    await page.locator('[placeholder="Enter your username"]').fill('Nafulah');
    await page.locator('[placeholder="Enter your password"]').fill('Nafula1234');
    await page.locator('text=Sign in').click();
})

test.only('Demo login 2', async ({page}) => {
   await page.goto('https://support.orangehrm.com/portal/en/signin')
   await page.pause()



})
