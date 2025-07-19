// Cette classe surveiller les appels API dans une page web
class ApiCallVerifier {
  constructor(page) {
    this.page = page;
  }

  //Méthode pour attendre une réponse API ayant un statut HTTP donné dans un délai donné
  async waitForResponseStatus(endpointPart, expectedStatus = 200, timeout = 5000) {
    console.log(`Attente réponse pour endpoint "${endpointPart}" avec statut ${expectedStatus}`);

    const response = await this.page.waitForResponse(
      res => res.url().includes(endpointPart) && res.status() === expectedStatus,
      { timeout }
    );

    if (response.status() !== expectedStatus) {
      throw new Error(`Status ${response.status()} reçu au lieu de ${expectedStatus} pour ${endpointPart}`);
    }

    console.log(`Réponse reçue avec succès (${expectedStatus}) pour ${endpointPart}`);

    return response;
  }
}
module.exports = ApiCallVerifier;