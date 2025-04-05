import { test, expect } from '@playwright/test';

test.describe('Form Validation for Password, Age, and Address 2', () => {

  test.beforeEach(async ({ page }) => {
    test.setTimeout(90000); // 90 seconds
    await page.goto('https://bit.ly/3FR29M2'); 
  });

  // Test: Valid password (minimum 4 characters)
  test('Valid password', async ({ page }) => {
    await page.fill('input[name="password"]', 'abcd');
    await page.click('button[type="create user"]');
    const successMsg = await page.locator('.success-message').textContent();
    expect(successMsg).toContain('Registration successful');
  });

  // Test: Invalid password (less than 4 characters)
  test('Invalid password - too short', async ({ page }) => {
    await page.fill('input[name="password"]', 'abc');
    await page.click('button[type="create user"]');
    const errorMsg = await page.locator('.error-message').textContent();
    expect(errorMsg).toContain('Password must be at least 4 characters');
  });

  // Test: Valid age (within range)
  test('Valid age (between 18 and 65)', async ({ page }) => {
    await page.fill('input[name="age"]', '25');
    await page.click('button[type="create user"]');
    const successMsg = await page.locator('.success-message').textContent();
    expect(successMsg).toContain('Registration successful');
  });

  // Test: Invalid age (less than 18)
  test('Invalid age - too young', async ({ page }) => {
    await page.fill('input[name="age"]', '17');
    await page.click('button[type="create user"]');
    const errorMsg = await page.locator('.error-message').textContent();
    expect(errorMsg).toContain('Age must be between 18 and 65');
  });

  // Test: Invalid age (greater than 65)
  test('Invalid age - too old', async ({ page }) => {
    await page.fill('input[name="age"]', '70');
    await page.click('button[type="create user"]');
    const errorMsg = await page.locator('.error-message').textContent();
    expect(errorMsg).toContain('Age must be between 18 and 65');
  });

  // Test: Valid Address 2 (5 characters)
  test('Valid Address 2 (5 characters)', async ({ page }) => {
    await page.fill('input[name="address2"]', 'Leo 5');
    await page.click('button[type="create user"]');
    const successMsg = await page.locator('.success-message').textContent();
    expect(successMsg).toContain('Registration successful');
  });

  // Test: Invalid Address 2 (more than 5 characters)
  test('Invalid Address 2 - too long', async ({ page }) => {
    await page.fill('input[name="address2"]', 'Nyandarua 105');
    await page.click('button[type="create user"]');
    const errorMsg = await page.locator('.error-message').textContent();
    expect(errorMsg).toContain('Maximum 5 characters allowed');
  });

  // Test: Empty Address 2 (optional field)
  test('Empty Address 2 (valid)', async ({ page }) => {
    await page.fill('input[name="address2"]', '');
    await page.click('button[type="create user"]');
    const successMsg = await page.locator('.success-message').textContent();
    expect(successMsg).toContain('Registration successful');
  });

});