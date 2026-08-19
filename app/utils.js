'use strict';

/**
 * Módulo de utilidades de formato y validación
 */

function formatMessage(title, author) {
  if (!title || !author) {
    throw new Error('Título y autor son obligatorios');
  }
  return `[${title.toUpperCase()}] por ${author}`;
}

function isPositive(n) {
  return typeof n === 'number' && n > 0;
}

module.exports = {
  formatMessage,
  isPositive
};
