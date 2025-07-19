const { test } = require('../utils/baseTest');
const { validUser, expectedUserData } = require('../data/user.data');
const { validateApiResponseStatus } = require('../utils/apiResponseValidator');

test('Upload Profile Photo - UI and API validation', async ({ page, loginPage, profilePage }) => {
  const baseUserKeys = {
    'user.email': expectedUserData.email,
    'user.firstname': expectedUserData.firstname,
    'user.lastname': expectedUserData.lastname
  };

  
  // Préparation de la validation de la réponse API lors de la récupération des infos utilisateur après login
  const loginValidation = validateApiResponseStatus(page, '/api/v2/users/me', {
    expectedStatus: 200,
    expectedKeys: baseUserKeys
  });

  await loginPage.goto('/');
  await loginPage.login(validUser.email, validUser.password);
  // Exécution de la validation de l'API de login
  await loginValidation;

  // Préparation de la validation de l'API après chargement de la page de profil, incluant les URLs d'avatar
  const avatarValidation = validateApiResponseStatus(page, '/api/v1/registrations', {
    expectedStatus: 200,
    expectedKeys: {
      ...baseUserKeys,
      'user.avatar.url': expectedUserData.avatar.url,
      'user.avatar.small.url': expectedUserData.avatar.small,
      'user.avatar.thumb.url': expectedUserData.avatar.thumb
    }
  });

  await profilePage.waitForLoad();
  await profilePage.changeProfileImage('tests/data/image_profile.png');
  // Exécution de la validation de l’API pour vérifier que l’avatar est bien mis à jour
  await avatarValidation;
});
