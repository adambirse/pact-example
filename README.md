# pact-example

This is an example application for demonstrating the use of pact and consumer driven contract testing.

The codebase was created for this [blogpost](https://blog.risingstack.com/consumer-driven-contract-testing-with-pact/) slightly inconsistent with the repository but good enough to get the gist.

## Usage

Setup

```bash
$ npm i
```

Run consumer side tests and create pacts

```bash
$ npm run test-consumer
```

Start Pact Broker

```bash
$ npm run pact-broker
```

Delete example pact

```bash
$ npm run delete-example-pact
```

Publish pacts

```bash
$ npm run publish-pacts
```

Verify pacts against the provider

```bash
$ npm run test-provider
```

## Compatibility

The codebase was written using `node v8.9.0`

## Things to experiment with

- Experiment with strict / less strict contract
   - change the provider data to see what breaks the contract
   - remove 'like' from the contract to create a more specific contract
   - https://docs.pact.io/getting_started/matching
- Change the consumer version (`package.json`)
- Duplicate the consumer to have the provider verify multiple contracts
   - change `consumer: 'Client',` in `provider.js`)
   - update `package.json` scripts.  
   - update `verifyPacts.js` to verify against new consumer
- Shared pact broker
   - Ngrok to a local machine
   - Pactflow
