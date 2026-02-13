import { test } from '@playwright/test';
import { LoginPage, BookPage, ShoppingCartPage } from '../pages';
import config from '../config.json';

const BASE_URL = config.url;
const EMAIL = config.username;
const PASSWORD = config.password;

test('Complete shopping flow: login, browse books, add to cart, checkout, logout', async ({ page }) => {
    // Initialize page objects
    const loginPage = new LoginPage(page);
    const bookPage = new BookPage(page);
    const cartPage = new ShoppingCartPage(page);

    // Navigate to https://demowebshop.tricentis.com/
    await loginPage.goto(BASE_URL);

    // Click on Log in Link
    await loginPage.navigateToLogin();

    // Enter username & password and login
    await loginPage.login(EMAIL, PASSWORD);

    // Verify the page title should be "Demo Web Shop"

     await page.getByRole('link', { name: 'Books' }).first().click();
     //await loginPage.verifyLoginSuccess();

    // // Click on first Books Link
    // await bookPage.navigateToBooks();

    // // Select Fiction Link and Add to Cart
    await bookPage.selectBook('Fiction');
    await bookPage.verifyBookPageLoaded('Fiction');
    await bookPage.addToCart();

    // Click on Shopping cart Link
    await cartPage.navigateToCart();

    // Update quantity to 1
    await cartPage.updateQuantity(1);

    // Verify the qty-input should be 1
    await cartPage.verifyQuantity(1);

    // Accept the terms of service
    await cartPage.acceptTermsOfService();

    // Click on Checkout
    await cartPage.proceedToCheckout();

    // Verify the title of the page contains "Checkout"
    await cartPage.verifyCheckoutPageLoaded();

    // Click on Logout
    await loginPage.clickByRole('link', 'Log out');

    // Verify user is logged out by checking for Log in link
    await loginPage.verifyElementVisible('link', 'Log in');
  });

