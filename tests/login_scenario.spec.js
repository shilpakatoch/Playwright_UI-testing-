import { test, expect } from '@playwright/test';

test.describe('SauceDemo Login Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

  test('Login with valid credentials', async ({ page }) => {
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  test('Login with invalid username', async ({ page }) => {
    await page.fill('#user-name', 'invalid_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    const errorMessage = await page.locator('[data-test="error"]').textContent();
    expect(errorMessage).toContain('Username and password do not match');
  });

  test('Login with invalid password', async ({ page }) => {
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'wrong_password');
    await page.click('#login-button');
    const errorMessage = await page.locator('[data-test="error"]').textContent();
    expect(errorMessage).toContain('Username and password do not match');
  });

  test('Login with blank username and password', async ({ page }) => {
    await page.click('#login-button');
    const errorMessage = await page.locator('[data-test="error"]').textContent();
    expect(errorMessage).toContain('Username is required');
  });

  test('Verify UI elements on the login page', async ({ page }) => {
    const usernameField = await page.isVisible('#user-name');
    const passwordField = await page.isVisible('#password');
    const loginButton = await page.isVisible('#login-button');
    expect(usernameField).toBe(true);
    expect(passwordField).toBe(true);
    expect(loginButton).toBe(true);
  });
});
