#!/bin/bash
# Build GRPC services from proto files.
# Usage: ./scripts/compile-proto.sh

OUT_DIR=./proto

mkdir -p $OUT_DIR
# rm -rf $OUT_DIR/**

# js
pbjs \
  -t static-module \
  -r ydb-sdk \
  -w commonjs \
  -p . \
  `ls ydb-api-protos-master/*.proto` \
  > proto/bundle.js

# ts
pbts -o $OUT_DIR/bundle.d.ts $OUT_DIR/bundle.js
