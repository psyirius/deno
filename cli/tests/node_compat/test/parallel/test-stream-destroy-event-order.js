// deno-fmt-ignore-file
// deno-lint-ignore-file

// Copyright Joyent and Node contributors. All rights reserved. MIT license.
// Taken from Node 18.12.1
// This file is automatically generated by `tools/node_compat/setup.ts`. Do not modify this file manually.

'use strict';

const common = require('../common');
const assert = require('assert');
const { Readable } = require('stream');

const rs = new Readable({
  read() {}
});

let closed = false;
let errored = false;

rs.on('close', common.mustCall(() => {
  closed = true;
  assert(errored);
}));

rs.on('error', common.mustCall((err) => {
  errored = true;
  assert(!closed);
}));

rs.destroy(new Error('kaboom'));
