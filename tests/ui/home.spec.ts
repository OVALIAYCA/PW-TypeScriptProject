import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });
import { test, expect } from '@playwright/test';
import { HomePage } from '../../src/pages/HomePage';
import { ENV } from '../../src/config/environment';


//test
test.describe('Practice Software Testing - Home Page', () => {
  let homePage: HomePage; 

  test.afterEach(async () => {
    await homePage.closeBrowser();
  });  
  test('should load the homepage and verify the title', async ({ page }) => {
    homePage = new HomePage(page);

    await homePage.navigateTo(ENV.baseURL);

    await homePage.verifyTitle('Practice Software Testing - Toolshop - v5.0');

    const isVisible = await homePage.isLoginButtonVisible();
    expect(isVisible).toBeTruthy(); // Assertion
  });
});
