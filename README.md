# Test Playwright — Upload photo de profil

Ce projet contient un test E2E automatisé avec Playwright qui simule un scénario utilisateur sur Welcome to the Jungle

## Scénario automatisé

Le test couvre le parcours suivant :

1. Accéder à la page (https://www.welcometothejungle.com/fr/me/profile)
2. Cliquer sur le bouton **"Se connecter"**
3. Renseigner l’**email** et le **mot de passe**
4. Cliquer de nouveau sur **"Se connecter"**
5. Clique sur sur **"Modifier"** 
5. Uploader une **photo de profil**
6. Cliquer sur **"Enregistrer"**

## Technologies utilisées

- Playwright(https://playwright.dev/)
- Node.js (JavaScript)
- npm

## Setup

1. git clone https://github.com/mohamedmarwen/playwright-project.git
2. cd playwright-project
3. Installer les dépendances :
    npm install
    npx playwright install
4. Lancer les tests :
    npm test
5. Générer et afficher le rapport :
    npx playwright show-report
