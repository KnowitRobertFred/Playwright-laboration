import { test } from '@playwright/test';
import { ProductsPage } from '../Page-Object/ProductsPage';

test.describe('Product page tests', () => {
  let productPage: ProductsPage;
  test.beforeEach(async ({ page }) => {
    productPage = new ProductsPage(page);
    await productPage.gotoPage();
  });

  test('Clicking a product opens product page', async () => {});
});
