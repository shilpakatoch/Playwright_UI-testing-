This project involves automating the UI testing for a sample e-commerce website (https://www.saucedemo.com/). The testing includes logging in, filtering products, adding items to the cart, and completing the checkout process.

## Tools & Technologies Used
- *Framework*: Playwright with JavaScript 
- *Version Control*: Git
- *IDE*: Visual Studio Code 

## Setup Instructions
1. *Clone the Repository:*
   bash
   git clone <repository-url>
   
2. *Install Dependencies:*
   Navigate to the project directory and install the necessary dependencies using npm:
   bash
   cd <project-directory>
   npm install
   
3. *Environment Setup:*
   If needed, set up environment variables for your tests. You can create a .env file in the root of the project and add any sensitive information such as credentials.

## Running the Tests
To execute the tests, use the following command in your terminal:
npx playwright test


You can also run specific tests by specifying the test file:
npx playwright test tests/<test-file-name>.js


## Test Details

### 1. Login Automation
- *Purpose*: Automate the login process using valid credentials.
- *Test Case*: The test will navigate to the login page, input the credentials, and assert the successful login.

### 2. Product Filtering
- *Purpose*: Automate the filtering of products by price from low to high.
- *Test Case*: The test will filter the products and verify that the products are displayed in the correct order.

### 3. Add to Cart
- *Purpose*: Automate adding the first two items from the filtered list to the cart.
- *Test Case*: The test will add two items to the cart and verify that they are correctly added.

### 4. Checkout Process
- *Purpose*: Automate the checkout process, including the cart details page, providing shipping details, and completing the purchase.
- *Test Case*: The test will simulate the checkout process and verify that the order is placed successfully.



---

