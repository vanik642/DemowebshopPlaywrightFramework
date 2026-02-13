import { Page, expect } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to a URL
   */
  async goto(url: string) {
    await this.page.goto(url);
  }

  /**
   * Click on an element by role and name
   */
  async clickByRole(role: string, name: string | RegExp) {
    await this.page.getByRole(role as any, { name }).click();
  }

  /**
   * Click on an element by locator
   */
  async clickByLocator(locator: string) {
    await this.page.locator(locator).click();
  }

  /**
   * Fill text in a textbox by role and name
   */
  async fillByRole(role: string, name: string, text: string) {
    await this.page.getByRole(role as any, { name }).fill(text);
  }

  /**
   * Set checkbox state by locator
   */
  async setCheckbox(locator: string, checked: boolean) {
    await this.page.locator(locator).setChecked(checked);
  }

  /**
   * Verify page title
   */
  async verifyPageTitle(expectedTitle: string | RegExp) {
    await expect(this.page).toHaveTitle(expectedTitle);
  }

  /**
   * Verify text is visible
   */
  async verifyTextVisible(text: string) {
    await expect(this.page.getByText(text)).toBeVisible();
  }

  /**
   * Verify element is visible by role and name
   */
  async verifyElementVisible(role: string, name: string) {
    await expect(this.page.getByRole(role as any, { name })).toBeVisible();
  }

  /**
   * Get page instance
   */
  getPage(): Page {
    return this.page;
  }
}
