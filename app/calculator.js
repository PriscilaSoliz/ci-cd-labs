'use strict';

/**
 * Módulo de Calculadora para operaciones aritméticas básicas
 */

function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Los argumentos deben ser números');
  }
  return a + b;
}

function subtract(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Los argumentos deben ser números');
  }
  return a - b;
}

function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Los argumentos deben ser números');
  }
  return a * b;
}

function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Los argumentos deben ser números');
  }
  if (b === 0) {
    throw new Error('División por cero no permitida');
  }
  return a / b;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide
};
