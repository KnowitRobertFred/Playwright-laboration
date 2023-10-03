import { Page, expect } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyScreenShot() {
    await expect(this.page).toHaveScreenshot({ fullPage: true });
  }
}
