'use strict'

const pact = require('@pact-foundation/pact-node')
require('./testProductsService')


//Works for new pact-node version but always reports success on the command line (correct results published to local broker though)
const opts = {
    providerBaseUrl: 'http://localhost:3001', // where your service will be running during the test, either staging or localhost on CI
    providerStatesSetupUrl: 'http://localhost:3001/test/setup', // the url to call to set up states
    pactBrokerUrl: 'http://localhost:8080',
    provider: 'ProductService',
    publishVerificationResult: true,
    providerVersion: '1.0.0',
}

pact.verifyPacts(opts).then(() => {
  console.log('success')
  process.exit(0)
}).catch((error) => {
  console.log('failed', error)
  process.exit(1)
})
