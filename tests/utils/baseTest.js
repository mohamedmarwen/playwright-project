const { test: base } = require('@playwright/test');
const LoginPage = require('../pages/login.page');
const ProfilePage = require('../pages/profile.page');

const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  profilePage: async ({ page }, use) => {
    await use(new ProfilePage(page));
  },
});

module.exports = { test };