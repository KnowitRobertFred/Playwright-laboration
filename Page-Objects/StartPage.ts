import { Locator, Page } from "@playwright/test";
import { CookiesDialog } from "./Components/CookiesDialog";

export class StartPage{
  readonly page: Page;
  readonly menuButton: Locator;
  readonly cookiesDialog: CookiesDialog;
  readonly baseUrl: string;

  constructor(page: Page){
    this.page = page;
    this.baseUrl = '/';
    this.cookiesDialog = new CookiesDialog(page);
    this.menuButton = page.getByRole('button', { name: 'menu icon Meny' });
  }

  async gotoPage(){
    await this.page.goto(this.baseUrl);
  }

  async acceptAllCookies(){
    await this.cookiesDialog.AcceptAllCookies();
  }

  async openMenu(){
    await this.menuButton.click();
  }
}