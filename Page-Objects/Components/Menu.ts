import { Locator, Page } from '@playwright/test';

export class Menu {
  readonly page: Page;
  readonly ourOffer: Locator;
  readonly solutionsLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.ourOffer = page.getByRole('link', { name: 'Vårt erbjudande' });
    this.solutionsLink = page.getByRole('button', { name: 'Systemlösningar' });
  }

  async openOurOfferSubMenu() {
    await this.ourOffer.click();
  }

  async gotoSolutions(): Promise<SolutionsPage> {
    await this.solutionsLink.click();

    return new SolutionsPage(this.page);
  }
}
