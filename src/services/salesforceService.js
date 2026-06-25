import { generatePKCE } from "./pkceService";

const CLIENT_ID = "3MVG9GCMQoQ6rpzTc77yeL5sLYv4X6ZzAcecVP6.2olzn3Pfj7NSD0gN3bphfpsVLW_CYLJA9L56ColduwjzF";

const REDIRECT_URI = "http://localhost:5173/callback";

const LOGIN_URL = "https://login.salesforce.com";

export const getLoginUrl = async () => {
  const codeChallenge = await generatePKCE();

  return `${LOGIN_URL}/services/oauth2/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}&code_challenge=${codeChallenge}&code_challenge_method=S256`;
};