#!/usr/bin/bash

# Go to workspace root
cd $(dirname "$0")/..

echo "Running unit tests in CI mode"
JEST_SUITE_NAME="Unit tests" \
JEST_JUNIT_OUTPUT_DIR=../../reports/server \
JEST_JUNIT_OUTPUT_NAME=unit-test.xml \
JEST_JUNIT_ANCESTOR_SEPARATOR=" > " \
yarn test --reporters=jest-junit