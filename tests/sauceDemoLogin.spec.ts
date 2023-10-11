import { expect, test } from '@playwright/test';

test('Login to sauce demo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  const usernameInput = page.getByPlaceholder('Username');
  await expect(usernameInput).toBeVisible();

  await usernameInput.fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Products')).toBeVisible();
});
