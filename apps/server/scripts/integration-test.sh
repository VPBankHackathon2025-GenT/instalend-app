#!/usr/bin/bash

# Go to workspace root
cd $(dirname "$0")/..

docker compose -f docker/integration/infra.yml up -d

if [ "$CI" = "true" ]; then
  echo "Running integration tests in CI mode"
  JEST_SUITE_NAME="Integration tests" \
  JEST_JUNIT_OUTPUT_DIR=../../reports/server \
  JEST_JUNIT_OUTPUT_NAME=integration-test.xml \
  JEST_JUNIT_ANCESTOR_SEPARATOR=" > " \
  yarn run -T jest --config ./jest.config.integration.js --reporters=jest-junit
else
  echo "Running integration tests in local mode"
  yarn run -T jest --config ./jest.config.integration.js "${@/-u/--updateSnapshot}"
fi

return_code=$?

docker compose -f docker/integration/infra.yml down --remove-orphans

exit $return_code