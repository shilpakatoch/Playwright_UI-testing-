import { test, expect } from '@playwright/test';

test.describe('SauceDemo Add to Cart', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://www.saucedemo.com/');
    
    // Perform login
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    
    // Ensure the user is on the inventory page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    // Filter products by price from low to high
    await page.selectOption('.product_sort_container', 'lohi');
  });

  test('Add first two filtered products to cart', async ({ page }) => {
    // Add the first item to the cart
    const firstAddToCartButton = await page.locator('.inventory_item').nth(0).locator('button');
    await firstAddToCartButton.click();

    // Add the second item to the cart
    const secondAddToCartButton = await page.locator('.inventory_item').nth(1).locator('button');
    await secondAddToCartButton.click();

    // Verify that the cart now has 2 items
    const cartBadge = await page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('2');
  });

});
