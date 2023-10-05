import { Locator, Page, expect } from '@playwright/test';

export class ProductsPage {
  readonly productsHeader: Locator;
  readonly page: Page;
  readonly pageUrl: string;

  constructor(page: Page) {
    this.page = page;
    this.productsHeader = page.getByText('Products');
    this.pageUrl = 'inventory.html';
  }

  async waitForNavigation() {
    await this.page.waitForURL(this.pageUrl);
  }

  async toBeDisplayed() {
    await expect(this.productsHeader).toBeVisible();
  }
}
