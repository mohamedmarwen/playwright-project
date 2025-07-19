// tests/utils/apiResponseValidator.js
async function validateApiResponseStatus(page, endpointPart, {
  expectedStatus = 200,
  expectedKeys = {}
} = {}) {
  const response = await page.waitForResponse(
    res => res.url().includes(endpointPart) && res.status() === expectedStatus
  );

  if (response.status() !== expectedStatus) {
    throw new Error(`Statut HTTP attendu ${expectedStatus} mais reçu ${response.status()}`);
  }

  const body = await response.json();

  for (const keyPath in expectedKeys) {
    const expectedValue = expectedKeys[keyPath];
    const actualValue = keyPath.split('.').reduce((obj, prop) => obj?.[prop], body);

    if (actualValue !== expectedValue) {
      throw new Error(`Validation échouée pour "${keyPath}" : attendu ${expectedValue}, reçu ${actualValue}`);
    }
  }

  return body;
}

module.exports = { validateApiResponseStatus };
