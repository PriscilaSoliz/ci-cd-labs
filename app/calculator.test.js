'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { add, subtract, multiply, divide } = require('./calculator');

test('Calculator - Operación Suma', () => {
  assert.strictEqual(add(5, 3), 8); // Corregido: 5 + 3 = 8
  assert.strictEqual(add(-2, 4), 2);
  assert.strictEqual(add(0, 0), 0);
});

test('Calculator - Operación Resta', () => {
  assert.strictEqual(subtract(10, 4), 6);
  assert.strictEqual(subtract(5, 8), -3);
});

test('Calculator - Operación Multiplicación', () => {
  assert.strictEqual(multiply(4, 5), 20);
  assert.strictEqual(multiply(-3, 6), -18);
  assert.strictEqual(multiply(7, 0), 0);
});

test('Calculator - Operación División', () => {
  assert.strictEqual(divide(20, 4), 5);
  assert.strictEqual(divide(7, 2), 3.5);
});

test('Calculator - Excepción al dividir por cero', () => {
  assert.throws(() => divide(10, 0), {
    message: 'División por cero no permitida'
  });
});
