#!/bin/bash
# Build GRPC services from proto files.
# Usage: ./scripts/compile-proto.sh

OUT_DIR=./proto

mkdir -p $OUT_DIR

# include only protos for runtime to get smaller size
outfile=bundle-runtime
pbjs -t static-module -r ydb-sdk -w commonjs -p . \
  ydb-api-protos-master/ydb_table_v1.proto \
  ydb-api-protos-master/ydb_scripting_v1.proto \
  > proto/bundle.js

pbts -o $OUT_DIR/bundle.d.ts $OUT_DIR/bundle.js

# full build (tbd)
# outfile=bundle-full
# pbjs -t static-module -r ydb-sdk -w commonjs -p . \
#   `ls ydb-api-protos-master/*.proto` \
#   > proto/$outfile.js

# pbts -o $OUT_DIR/$outfile.d.ts $OUT_DIR/$outfile.js



