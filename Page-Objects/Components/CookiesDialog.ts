import { Locator, Page } from '@playwright/test';

export class CookiesDialog {
  readonly AcceptAllCookiesButton: Locator;
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    this.AcceptAllCookiesButton = page.getByRole('button', {
      name: 'Godkänn alla',
    });
  }

  async AcceptAllCookies() {
    await this.AcceptAllCookiesButton.click();
  }
}
