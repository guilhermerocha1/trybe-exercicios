const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];

const studantResp = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkResp = (provaResp, studant) => {
  let sumResp = 0;
  for (let index = 0; index < studant.length; index += 1) {
    if (provaResp[index] === studant[index]) {
      sumResp += 1;
    }
    if (studant[index] === 'N.A') {
      sumResp += 0;
    } else {
      sumResp += 0.5;
    }
  }
  return sumResp;
}

const respCorrect = (provaResp, studant, resultPoints) => {
  let sumCorrect = 0
  for (let index = 0; index < studant.length; index += 1) {
    if (provaResp[index] === studant[index]) {
      sumCorrect += 1;
    }
  }
  return `Quantidade de respostas certas foi de: ${sumCorrect}
É pontuação completa: ${resultPoints} pontos`;
}

console.log(respCorrect(gabarito, studantResp, checkResp(gabarito, studantResp)));