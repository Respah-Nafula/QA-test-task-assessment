import '@playwright/test';
// import { helloworld } from './demo/hello';
import test from 'node:test';
test('My first test', async ({page})=>{
   await  page.goto('https://google.com')
   expect (page).toHaveTitle('Google')

})
