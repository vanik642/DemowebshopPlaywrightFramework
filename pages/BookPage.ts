import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class BookPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /**
   * Navigate to Books section
   */
  async navigateToBooks() {
    await this.clickByRole('link', /^Books$/);
  }

  /**
   * Select a book by name (e.g., "Fiction")
   */
  async selectBook(bookName: string) {
    const page = this.getPage();
    await page.getByRole('link', { name: bookName }).first().click();
  }

  /**
   * Add book to cart
   */
  async addToCart(productId: number = 45) {
    await this.clickByLocator(`#add-to-cart-button-${productId}`);
  }

  /**
   * Verify book product page is loaded
   */
  async verifyBookPageLoaded(bookName: string) {
    await this.verifyPageTitle(new RegExp(bookName));
  }
}
