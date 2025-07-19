const { test } = require('../utils/baseTest');
const { validUser } = require('../data/user.data');
const { validateApiResponseStatus } = require('../utils/apiResponseValidator');

test('Upload Profile Photo - UI and API validation', async ({ page, loginPage, profilePage }) => {
  const Loginvalidation = validateApiResponseStatus(page, '/api/v2/users/me', {
    expectedStatus: 200,
    expectedKeys: {
      'user.email': 'tej.marwen@gmail.com',
      'user.firstname': 'Marwen',
      'user.lastname': null
    }
  });

  await loginPage.goto('/');
  await loginPage.login(validUser.email, validUser.password);
  await Loginvalidation;

  const PictureLoadvalidation = validateApiResponseStatus(page, '/api/v1/registrations', {
    expectedStatus: 200,
    expectedKeys: {
      'user.email': 'tej.marwen@gmail.com',
      'user.firstname': 'Marwen',
      'user.lastname': null,
      'user.avatar.url': 'https://cdn-images.welcometothejungle.com/v4gy6tEyR8wp_Tzp4bwX9EKXoJJQKsEYZDvXTyK3o_A/rs:auto:2000::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9hcHBsaWNhbnRzL2UwMDAwNzI2ZjcvYXZhdGFycy9jYXB0dXJlLWRlY3Jhbi0yMDI1LTA3LTE4LWEtMTMuNDcuMTIuanBn',
      'user.avatar.small.url': 'https://cdn-images.welcometothejungle.com/wypJsfkFOFaKwKCq1XtI1z941sa1vMEoi_H7RQEEt4I/rs:auto:500::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9hcHBsaWNhbnRzL2UwMDAwNzI2ZjcvYXZhdGFycy9jYXB0dXJlLWRlY3Jhbi0yMDI1LTA3LTE4LWEtMTMuNDcuMTIuanBn',
      'user.avatar.thumb.url': 'https://cdn-images.welcometothejungle.com/oBSHS2zyTREziet31l79La2b0Ls0GeUeh3lvGF_V3hI/rs:auto:100::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9hcHBsaWNhbnRzL2UwMDAwNzI2ZjcvYXZhdGFycy9jYXB0dXJlLWRlY3Jhbi0yMDI1LTA3LTE4LWEtMTMuNDcuMTIuanBn'
 
    }
  });
  await profilePage.waitForLoad();
  await profilePage.changeProfileImage('tests/data/image_profile.png');
  await PictureLoadvalidation;
});
