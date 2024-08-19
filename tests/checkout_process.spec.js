import { test, expect } from '@playwright/test';

test.describe('SauceDemo Checkout Process', () => {

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
    
    // Add the first item to the cart
    await page.locator('.inventory_item').nth(0).locator('button').click();

    // Add the second item to the cart
    await page.locator('.inventory_item').nth(1).locator('button').click();
  });

  test('Complete the checkout process', async ({ page }) => {
    // Navigate to the cart
    await page.click('.shopping_cart_link');

    // Verify the cart page contains 2 items
    const cartItems = await page.locator('.cart_item');
    await expect(cartItems).toHaveCount(2);

    // Proceed to checkout
    await page.click('#checkout');

    // Fill in shipping details
    await page.fill('#first-name', 'John');
    await page.fill('#last-name', 'Doe');
    await page.fill('#postal-code', '12345');
    await page.click('#continue');

    // Verify the summary page is displayed
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

    // Complete the purchase
    await page.click('#finish');

    // Verify the order confirmation page
    const confirmationMessage = await page.locator('.complete-header').textContent();
    expect(confirmationMessage).toContain('Thank you for your order!');
  });

});
