function base64URLEncode(buffer) {
  return btoa(String.fromCharCode(...new Uint8Array(buffer)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
}

export async function generatePKCE() {
  const codeVerifier = crypto.randomUUID() + crypto.randomUUID();

  const encoder = new TextEncoder();

  const data = encoder.encode(codeVerifier);

  const digest = await crypto.subtle.digest("SHA-256", data);

  const codeChallenge = base64URLEncode(digest);

  localStorage.setItem("code_verifier", codeVerifier);

  return codeChallenge;
}