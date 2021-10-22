const longestWord = 'Antônio foi no banheiro e não sabemos o que aconteceu'; // retorna 'aconteceu'

const MaiorPalavra = (frase) => {
  let maior = '';
  const palavras = frase.split(" ");
  for (let i = 0; i <= palavras.length; i += 1) {
    if (palavras[i] > maior) {
      maior = palavras[i];
    }
  }
  return maior;
}

console.log(MaiorPalavra(longestWord));
