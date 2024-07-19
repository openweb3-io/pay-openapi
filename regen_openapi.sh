#!/bin/sh

set -ex

if [ $# -ne 1 ]; then
    echo "ERROR: need to specify a project name"
    exit 1
fi

pkg=$1

yarn openapi-generator-cli generate -i openapi-${pkg}.json -g typescript -o ${pkg}/javascript/src/openapi -c ${pkg}/javascript/openapi-generator-config.json -t ${pkg}/javascript/templates --type-mappings=set=Array

# yarn openapi-generator-cli generate -i openapi.json -g go -o go/internal/openapi -c go/openapi-generator-config.json -t go/templates

yarn openapi-generator-cli generate -i openapi-${pkg}.json -g java -o ${pkg}/java/lib -c ${pkg}/java/openapi-generator-config.json -t ${pkg}/java/templates

# yarn openapi-generator-cli generate -i openapi.json -g kotlin -o kotlin/lib/generated/openapi -c kotlin/openapi-generator-config.json -t kotlin/templates

# yarn openapi-generator-cli generate -i openapi.json -g ruby -o ruby -c ruby/openapi-generator-config.json -t ruby/templates

# yarn openapi-generator-cli generate -i openapi.json -g csharp-netcore -o csharp/ -c csharp/openapi-generator-config.json --global-property apis,models,supportingFiles,apiTests=false,apiDocs=false,modelTests=false,modelDocs=false

# yarn openapi-generator-cli generate -i openapi.json -g rust -o rust/ -c rust/openapi-generator-config.json -t rust/templates

echo Note: Python generation is not executed automatically.
