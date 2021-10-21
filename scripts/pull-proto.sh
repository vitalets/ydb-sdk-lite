#!/bin/bash
# Update proto files from https://github.com/ydb-platform/ydb-api-protos
# Usage: ./scripts/update-proto.sh

set -euo pipefail

wget "https://github.com/ydb-platform/ydb-api-protos/archive/master.zip" -O master.zip
unzip master.zip
rm -f master.zip
