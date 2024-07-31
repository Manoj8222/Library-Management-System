export const oktaConfig = {
  clientId: "0oaig5sbg3JcldpQS5d7",
  issuer: "https://dev-35399144.okta.com/oauth2/default",
  redirectUri: "https://localhost:3000/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
