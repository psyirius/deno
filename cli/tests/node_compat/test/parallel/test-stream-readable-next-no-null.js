// deno-fmt-ignore-file
// deno-lint-ignore-file

// Copyright Joyent and Node contributors. All rights reserved. MIT license.
// Taken from Node 18.12.1
// This file is automatically generated by `tools/node_compat/setup.ts`. Do not modify this file manually.

'use strict';
const { mustNotCall, expectsError } = require('../common');
const { Readable } = require('stream');

async function* generate() {
  yield null;
}

const stream = Readable.from(generate());

stream.on('error', expectsError({
  code: 'ERR_STREAM_NULL_VALUES',
  name: 'TypeError',
  message: 'May not write null values to stream'
}));

stream.on('data', mustNotCall((chunk) => {}));

stream.on('end', mustNotCall());
