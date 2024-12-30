import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly loginButton: string;

  constructor(page: any) {
    super(page); 
    this.loginButton = 'text=Sign in';
  }

  async isLoginButtonVisible(): Promise<boolean> {
    return await this.isElementVisible(this.loginButton);
  }
}
