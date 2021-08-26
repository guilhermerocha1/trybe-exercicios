const salarioBruto = 2456.78;
let salarioLiquido, aliquotaINSS, aliquotaIR;

if (salarioBruto <= 1556.94) {
    aliquotaINSS = ((salarioBruto*8)/100);
}

else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    aliquotaINSS = ((salarioBruto*9)/100);
}

else if (salarioBruto > 2594.92 && salarioBruto <= 5189.52) {
    aliquotaINSS = ((salarioBruto*11)/100);
}

else if (salarioBruto > 5189.52){
    aliquotaINSS = 570.88;
}

console.log("aliquota INSS", aliquotaINSS);

if (salarioBruto < 1903.99){
    aliquotaIR = 0;
    console.log("insento(a)");
}

else if (salarioBruto > 1903.99 && salarioBruto <= 2826.65){
    aliquotaIR = 142.80;
}

else if (salarioBruto > 2826.65 && salarioBruto <= 3751.05){
    aliquotaIR = 354.80;
}

else if (salarioBruto > 3751.05 && salarioBruto <= 4664.68){
    aliquotaIR = 636.13;
}

else if (salarioBruto > 4664.68){
    aliquotaIR = 869.36;
}
console.log("aliquota IR" ,aliquotaIR);
salarioLiquido = salarioBruto - (aliquotaIR + aliquotaINSS);
console.log(salarioLiquido);