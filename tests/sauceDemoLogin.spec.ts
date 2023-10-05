import { test } from '@playwright/test';
import { LoginPage } from '../Page-Object/LoginPage';
test('Login to sauce demo', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoPage();
  await loginPage.enterUserName('standard_user');
  await loginPage.enterPassword('secret_sauce');
  const productsPage = await loginPage.clickLogin();

  await productsPage.waitForNavigation();
  await productsPage.toBeDisplayed();
});
