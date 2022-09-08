"use strict";
const readlineSync = require('readline-sync');
var messes;
(function (messes) {
    messes[messes["janeiro"] = 1] = "janeiro";
    messes[messes["fevereiro"] = 2] = "fevereiro";
    messes[messes["mar\u00E7o"] = 3] = "mar\u00E7o";
    messes[messes["abril"] = 4] = "abril";
    messes[messes["maio"] = 5] = "maio";
    messes[messes["junho"] = 6] = "junho";
    messes[messes["julho"] = 7] = "julho";
    messes[messes["agosto"] = 8] = "agosto";
    messes[messes["setembro"] = 9] = "setembro";
    messes[messes["outubro"] = 10] = "outubro";
    messes[messes["novembro"] = 11] = "novembro";
    messes[messes["dezembro"] = 12] = "dezembro";
})(messes || (messes = {}));
var estacoes;
(function (estacoes) {
    estacoes[estacoes["primavera"] = 1] = "primavera";
    estacoes[estacoes["outono"] = 2] = "outono";
    estacoes[estacoes["inverno"] = 3] = "inverno";
    estacoes[estacoes["verao"] = 4] = "verao";
})(estacoes || (estacoes = {}));
const questionMes = readlineSync.question('Qual mes? ');
const questionHemisferio = readlineSync.question('Qual hesmiferio [N/S]? ');
const verificaEstacaoAno = (mes, hemisferio) => {
    if (hemisferio === 'N') {
        console.log(`Estaçao do ano no Hemisfério Norte mes: ${messes[mes]}`);
        const mesUser = messes[mes];
        if (mesUser === 'setembro')
            console.log('Outono, Verao');
        else if (mesUser === 'dezembro')
            console.log('Inverno, Verao');
        else if (mesUser === 'março')
            console.log('Primavera, Inverno');
        else if (mesUser === 'junho')
            console.log('Verao, Primavera');
        else
            console.log('O mes informado nao inicia nem termina uma estacao');
    }
    if (hemisferio === 'S') {
        console.log(`Estaçao do ano no Hemisfério Norte mes: ${messes[mes]}`);
        const mesUser = messes[mes];
        if (mesUser === 'setembro')
            console.log('Outono, Verao');
        else if (mesUser === 'dezembro')
            console.log('Inverno, Verao');
        else if (mesUser === 'março')
            console.log('Primavera, Inverno');
        else if (mesUser === 'junho')
            console.log('Verao, Primavera');
        else
            console.log('O mes informado nao inicia nem termina uma estacao');
    }
};
verificaEstacaoAno(questionMes, questionHemisferio);
