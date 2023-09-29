import { test } from '@playwright/test';
import { StartPage } from '../Page-Objects/StartPage';

test('Home page should open', async ({page}) =>{
  let startPage = new StartPage(page);
  await startPage.gotoPage();
  await startPage.acceptAllCookies();
  await startPage.openMenu();
});