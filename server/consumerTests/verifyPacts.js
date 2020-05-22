'use strict'

const pact = require('@pact-foundation/pact-node')
require('./testProductsService')

const PACT_BROKER_URL = process.env.PACT_BROKER_URL || 'http://localhost:8080';
const PACT_BROKER_TOKEN = process.env.PACT_BROKER_TOKEN || '';

const opts = {
    providerBaseUrl: 'http://localhost:3001', // where your service will be running during the test, either staging or localhost on CI
    providerStatesSetupUrl: 'http://localhost:3001/test/setup', // the url to call to set up states
    pactBrokerUrl: PACT_BROKER_URL,
    pactBrokerToken: PACT_BROKER_TOKEN,
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
