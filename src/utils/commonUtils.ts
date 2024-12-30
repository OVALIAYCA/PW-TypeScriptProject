import { Page } from '@playwright/test';

export class CommonUtils {
  static async isElementVisible(page: Page, selector: string): Promise<boolean> {
    const locator = page.locator(selector);
    try {
      await locator.waitFor({ state: 'visible' });
      return true;
    } catch {
      return false;
    }
  }
}
