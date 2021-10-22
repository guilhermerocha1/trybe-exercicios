function sum(a, b) {
  if (a + b === 9){
  }
  if (a === 0 && b === 0){
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

module.exports = sum;