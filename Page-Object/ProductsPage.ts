import { Locator, Page, expect } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly pageUrl: string;
  readonly productsHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageUrl = 'inventory.htm';
    this.productsHeader = page.getByText('Products');
  }

  async gotoPage() {
    await this.page.goto(this.pageUrl);
    await expect(this.productsHeader).toBeVisible();
  }

  async verifyScreenShot() {
    await expect(this.page).toHaveScreenshot({ fullPage: true });
  }

  async waitForNavigation() {
    await this.page.waitForURL(this.pageUrl);
  }
}
