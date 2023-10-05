import { Locator, Page, expect } from '@playwright/test';
import { ProductsPage } from './ProductsPage';

export class LoginPage {
  readonly page: Page;
  readonly userNameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly pageUrl: string;

  constructor(page: Page) {
    this.page = page;
    this.userNameInput = page.getByTestId('username');
    this.passwordInput = page.getByTestId('password');
    this.loginButton = page.getByTestId('login-button');
    this.pageUrl = '/';
  }

  async gotoPage() {
    await this.page.goto(this.pageUrl);
    await expect(this.userNameInput).toBeVisible();
  }

  async loginUser(username: string, password: string): Promise<ProductsPage> {
    await this.enterUserName(username);
    await this.enterPassword(password);
    var productsPage = await this.clickLogin();

    return productsPage;
  }

  async enterUserName(username: string) {
    await this.userNameInput.fill(username);
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickLogin(): Promise<ProductsPage> {
    await this.loginButton.click();

    return new ProductsPage(this.page);
  }
}
