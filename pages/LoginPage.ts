import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /**
   * Navigate to login page by clicking Log in link
   */
  async navigateToLogin() {
    await this.clickByRole('link', 'Log in');
  }

  /**
   * Login with email and password
   */
  async login(email: string, password: string) {
    await this.fillByRole('textbox', 'Email:', email);
    await this.fillByRole('textbox', 'Password:', password);
    await this.clickByRole('button', 'Log in');
  }

  /**
   * Verify user is logged in
   */
  async verifyLoginSuccess() {
    await this.verifyPageTitle('Demo Web Shop');
  }
}
