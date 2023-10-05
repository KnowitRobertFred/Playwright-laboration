import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../Page-Object/LoginPage';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoPage();
  const productsPage = await loginPage.loginUser(
    'standard_user',
    'secret_sauce'
  );
  await productsPage.waitForNavigation();

  await page.context().storageState({ path: authFile });
});
