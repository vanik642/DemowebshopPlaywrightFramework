import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ShoppingCartPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /**
   * Navigate to shopping cart
   */
  async navigateToCart() {
    const page = this.getPage();
    await page.getByRole('link', { name: 'Shopping cart' }).first().click();
  }

  /**
   * Update quantity of item in cart
   */
  async updateQuantity(quantity: number, itemQuantitySelector: string = 'input[name="itemquantity6324222"]') {
    const page = this.getPage();
    await page.locator(itemQuantitySelector).fill(quantity.toString());
  }

  /**
   * Verify quantity in cart
   */
  async verifyQuantity(expectedQty: number, itemQuantitySelector: string = 'input[name="itemquantity6324222"]') {
    const page = this.getPage();
    await expect(page.locator(itemQuantitySelector)).toHaveValue(expectedQty.toString());
  }

  /**
   * Accept terms of service
   */
  async acceptTermsOfService() {
    await this.setCheckbox('#termsofservice', true);
  }

  /**
   * Proceed to checkout
   */
  async proceedToCheckout() {
    await this.clickByRole('button', 'Checkout');
  }

  /**
   * Verify checkout page is loaded
   */
  async verifyCheckoutPageLoaded() {
    await this.verifyPageTitle(/Checkout/);
  }
}
