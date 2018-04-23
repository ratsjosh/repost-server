const jwt = require('express-jwt')
const jwks = require('jwks-rsa')

// [START AUTHENTICATION]
module.exports = {
  authCheck: jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),
    // This is the identifier we set when we created the API
    audience: `${process.env.AUTH0_AUDIENCE}`,
    issuer: `https://${process.env.AUTH0_DOMAIN}/`,
    algorithms: ['RS256']
  })
}
