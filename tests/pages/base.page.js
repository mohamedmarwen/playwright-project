// tests/pages/base.page.js
class BasePage {
  constructor(page) {
    this.page = page;
  }

  async goto(path = '') {
    const baseUrl = process.env.BASE_URL;
    if (!baseUrl) throw new Error('BASE_URL is undefined');
    const url = `${baseUrl}${path}`;
    await this.page.goto(url);

    // Appel du gestionnaire de popups après navigation
    await this.handlePopups();
  }

  async handlePopups() {
    // Timeout court pour éviter blocage si absentes
    const geoButton = this.page.locator('button:has-text("Rester sur le site français")');
    try {
      await geoButton.waitFor({ state: 'visible', timeout: 3000 });
      await geoButton.click();
    } catch {
      // Pas visible → on ignore
    }

    const cookieConsent = this.page.locator('#axeptio_btn_acceptAll');
    try {
      await cookieConsent.waitFor({ state: 'visible', timeout: 3000 });
      await cookieConsent.click();
    } catch {
      // Pas visible → on ignore
    }
  }
}

module.exports = BasePage;
