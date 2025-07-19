const BasePage = require('./base.page');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.loginButton = 'button:has-text("Se connecter")';
    this.emailInput = page.locator('input[data-testid="login-field-email"]');
    this.passwordInput = page.locator('input[data-testid="login-field-password"]');
    this.loginButton = page.locator('button[data-testid="login-button-submit"]');
  }

  async openLoginForm() {
    await this.page.click(this.loginButton);
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
module.exports = LoginPage;