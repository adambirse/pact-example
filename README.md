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
- Shared pact broker, See Pactflow below.


## Pactflow

Create an account - https://pactflow.io/

You will then need to set a couple of environment variables

`set PACT_BROKER_URL=<YOUR_BROKER>`

`set PACT_BROKER_TOKEN=<YOUR_TOKEN>`


### Publishing pacts

`curl -LO https://github.com/pact-foundation/pact-ruby-standalone/releases/download/v1.84.0/pact-1.84.0-osx.tar.gz
tar xzf pact-1.84.0-osx.tar.gz`

`cd pact/bin`
` ./pact-broker publish --consumer-app-version 1.0.0 --broker-base-url BROKER_URL --broker-token BROKER_TOKEN ../../pact-example/pacts/client-productservice.json --tag master`
