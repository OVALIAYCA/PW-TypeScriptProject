import { Page, expect } from '@playwright/test';
import { CommonUtils } from '../utils/commonUtils';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async clickElement(selector: string) {
    const element = this.page.locator(selector);
    await element.click();
  }


  async isElementVisible(selector: string): Promise<boolean> {
    return await CommonUtils.isElementVisible(this.page, selector);
  }

  async verifyTitle(expectedTitle: string) {
    await expect(this.page).toHaveTitle(expectedTitle);
  }

  async closeBrowser() {
    await this.page.close();
  }
}