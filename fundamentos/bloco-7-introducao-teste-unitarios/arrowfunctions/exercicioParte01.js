const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
oddsAndEvens.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0
});
console.log(`Os números ${oddsAndEvens} se encontran ordenados de forma crecente!`); // será necessário alterar essa linha