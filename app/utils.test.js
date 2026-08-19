'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { formatMessage, isPositive } = require('./utils');

test('Utils - Formato de mensaje', () => {
  assert.strictEqual(formatMessage('ci/cd pipeline', 'Priscila'), '[CI/CD PIPELINE] por Priscila');
});

test('Utils - Validación de números positivos', () => {
  assert.strictEqual(isPositive(10), true);
  assert.strictEqual(isPositive(-5), false);
  assert.strictEqual(isPositive(0), false);
});
