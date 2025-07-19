const { expect } = require('@playwright/test');

class ApiCallVerifier {
  constructor(page) {
    this.page = page;
  }

  async waitForResponseStatus(endpointPart, expectedStatus = 200, timeout = 5000) {
    console.log(`[API VERIFIER] Attente réponse pour endpoint "${endpointPart}" avec statut ${expectedStatus}`);

    const response = await this.page.waitForResponse(
      res => res.url().includes(endpointPart) && res.status() === expectedStatus,
      { timeout }
    );

    if (response.status() !== expectedStatus) {
      throw new Error(`Status ${response.status()} reçu au lieu de ${expectedStatus} pour ${endpointPart}`);
    }

    console.log(`[API VERIFIER] Réponse reçue avec succès (${expectedStatus}) pour ${endpointPart}`);

    return response;
  }

  enableVerboseLogging() {
    this.page.on('request', req => {
      console.log(`➡️ Requête: ${req.method()} ${req.url()}`);
    });
    this.page.on('response', res => {
      console.log(`⬅️ Réponse: ${res.status()} ${res.url()}`);
    });
  }
}

module.exports = ApiCallVerifier;
