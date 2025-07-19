const BasePage = require('./base.page');
const { expect } = require('@playwright/test');

class ProfilePage extends BasePage {
  constructor(page) {
    super(page);
    this.editProfileInformationButton = page.locator('button[data-testid="edit-profile-information-button"]');
    this.profileImageInput = page.locator('input[type=file]');
    this.saveButton = page.locator('button[data-testid="account-edit-button-submit"]');
    this.editIcon = page.locator('button:has-text("Importer une image")');
    this.penIcon = page.locator('button:has(svg[alt="Edit"])');
    this.successTitleText = page.locator('span:has-text("Mise à jour réussie !")');
    this.successMessageText = page.locator('span:has-text("Vos informations personnelles ont bien été mises à jour.")');
  }

  // Attendre et vérifier la page profile
  async waitForLoad() {
    await this.page.waitForURL('**/fr/me/profile', { timeout: 10000 });
  }

  async changeProfileImage(filePath) {
  // Cliquer sur le bouton modifier
  await this.editProfileInformationButton.click();

  // Cliquer sur le bouton "Importer une image" si le profile ne possède pas une image ou l'icone stylo si le proffile posède déjà une photo
  if (await this.editIcon.isVisible()) {
    await this.editIcon.click();
  } 
  else if (await this.penIcon.isVisible()) {
    await this.penIcon.click();
  }
  // Insérer l'image de profile
  await this.profileImageInput.setInputFiles(filePath);

  // Cliquer pour valider le formulaire
  //await this.saveButton.scrollIntoViewIfNeeded();
  await this.saveButton.click();

  // Vérifier que le popup de validation du formulaire est affiché
  await expect(this.successTitleText).toBeVisible();
  await expect(this.successMessageText).toBeVisible();
  }
}
module.exports = ProfilePage;