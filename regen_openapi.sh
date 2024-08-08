#!/bin/sh

set -ex

yarn openapi-generator-cli generate -i openapi.json -g typescript -o ./javascript/src/openapi -c ./javascript/openapi-generator-config.json -t ./javascript/templates --type-mappings=set=Array 

yarn openapi-generator-cli generate -i openapi.json -g go -o go/internal/openapi -c go/openapi-generator-config.json -t go/templates
rm -rf go/internal/openapi/go.mod
rm -rf go/internal/openapi/go.sum

yarn openapi-generator-cli generate -i openapi.json -g java -o ./java/lib -c ./java/openapi-generator-config.json -t ./java/templates

# yarn openapi-generator-cli generate -i openapi.json -g kotlin -o kotlin/lib/generated/openapi -c kotlin/openapi-generator-config.json -t kotlin/templates

# yarn openapi-generator-cli generate -i openapi.json -g ruby -o ruby -c ruby/openapi-generator-config.json -t ruby/templates

# yarn openapi-generator-cli generate -i openapi.json -g csharp-netcore -o csharp/ -c csharp/openapi-generator-config.json --global-property apis,models,supportingFiles,apiTests=false,apiDocs=false,modelTests=false,modelDocs=false

# yarn openapi-generator-cli generate -i openapi.json -g rust -o rust/ -c rust/openapi-generator-config.json -t rust/templates

echo Note: Python generation is not executed automatically.
