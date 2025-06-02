const { test } = require('@playwright/test');

test('Selectors Demo', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.pause();
    
    // using any object property
    await page.click('id=user-name');
    await page.locator('[id="user-name"]').click();
    await page.locator('id=user-name').fill('Nafula');
    await page.locator('[id="user-name"]').fill('Rebah');
    
    // using css selector
    await page.locator('#login-button').click();
    
    // using XPath
    await page.locator('xpath=//input[@name="password"]').fill('Furahiday');
    await page.locator('//input[@name="password"]').fill('gumgumbagya');
    
    // using text
    await page.locator('text=LOGIN').click();
    await page.locator('input:has-text("LOGIN")').click();
});