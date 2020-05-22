#!/usr/bin/env bash
for f in pacts/*.json; do
  consumer=$(jq '.consumer.name' $f | sed s'/"//g')
  provider=$(jq '.provider.name' $f | sed s'/"//g')
  consumer_version=$(jq '.version' package.json | sed s'/"//g')

  if [[ -z "${PACT_BROKER_URL}" ]]; then
    echo "Publishing to default local broker"
    curl -X PUT \-H "Content-Type: application/json" \
      -d @$f \
      http://localhost:8080/pacts/provider/$provider/consumer/$consumer/version/$consumer_version
  else
    curl -X PUT \-H "Content-Type: application/json" \
    \-H "Authorization: Bearer $PACT_BROKER_TOKEN" \
      -d @$f \
      $PACT_BROKER_URL/pacts/provider/$provider/consumer/$consumer/version/$consumer_version
  fi
done
