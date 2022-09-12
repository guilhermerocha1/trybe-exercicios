const readlineSync = require('readline-sync');

enum messes {
  janeiro = 1,
  fevereiro,
  março,
  abril,
  maio,
  junho,
  julho,
  agosto,
  setembro,
  outubro,
  novembro,
  dezembro,
}

enum estacoes { primavera = 1, outono, inverno, verao }

const questionMes = readlineSync.question('Qual mes? ');
const questionHemisferio = readlineSync.question('Qual hesmiferio [N/S]? ');

const verificaEstacaoAno = (mes: number, hemisferio: string): void => {
  if (hemisferio === 'N') {
    console.log(`Estaçao do ano no Hemisfério Norte mes: ${messes[mes]}`);
    const mesUser = messes[mes];
    if (mesUser === 'setembro') console.log('Outono, Verao');
    else if (mesUser === 'dezembro') console.log('Inverno, Verao');
    else if (mesUser === 'março') console.log('Primavera, Inverno'); 
    else if (mesUser === 'junho') console.log('Verao, Primavera'); 
    else console.log('O mes informado nao inicia nem termina uma estacao');
  }
  if (hemisferio === 'S') {
    console.log(`Estaçao do ano no Hemisfério Norte mes: ${messes[mes]}`);
    const mesUser = messes[mes];
    if (mesUser === 'setembro') console.log('Outono, Verao');
    else if (mesUser === 'dezembro') console.log('Inverno, Verao');
    else if (mesUser === 'março') console.log('Primavera, Inverno'); 
    else if (mesUser === 'junho') console.log('Verao, Primavera'); 
    else console.log('O mes informado nao inicia nem termina uma estacao');
  }
}

verificaEstacaoAno(questionMes, questionHemisferio);
