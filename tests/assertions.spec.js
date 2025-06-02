import test, {page, expect } from 'playwright/test';
test('Assertions Demo', async({page})=>{
    await page.goto('https://kitchen.applitools.com/')
    await page.pause()
})