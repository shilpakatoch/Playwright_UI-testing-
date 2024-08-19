import { test, expect } from '@playwright/test';

test.describe('SauceDemo Product Filtering', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://www.saucedemo.com/');
    
    // Perform login
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    
    // Ensure the user is on the inventory page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  test('Filter products by price from low to high', async ({ page }) => {
    // Locate the filter dropdown and select "Price (low to high)"
    await page.selectOption('.product_sort_container', 'lohi');

    // Grab the prices of the displayed products
    const prices = await page.$$eval('.inventory_item_price', (items) => 
      items.map(item => parseFloat(item.textContent.replace('$', '')))
    );
 // Ensure the prices are sorted from low to high
 for (let i = 0; i < prices.length - 1; i++) {
    expect(prices[i]).toBeLessThanOrEqual(prices[i + 1]);
  }
});

});
