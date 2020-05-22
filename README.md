# pact-example

This is an example application for demonstrating the use of pact and consumer driven contract testing.

The codebase was created for this [blogpost](https://blog.risingstack.com/consumer-driven-contract-testing-with-pact/) slightly inconsistent with the repository but good enough to get the gist.

## Usage

Setup

```bash
$ npm i
```

Build Pact Broker

```bash
$ npm run build-pact-broker
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

Pactflow is a hosted pack broker you can create a free account - https://pactflow.io/

You will then need to set a couple of environment variables

`set PACT_BROKER_URL=<YOUR_BROKER>`

`set PACT_BROKER_TOKEN=<YOUR_TOKEN>`

You will need to unset them to use the local pact broker.
