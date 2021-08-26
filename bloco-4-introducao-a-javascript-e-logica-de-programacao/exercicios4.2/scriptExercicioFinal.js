let numbers = [3, 10, 67, 12, 70, 8, 100, 120, 34, 10];
let soma = 0, maior = 0, somaImpares = 0, menor = 0;

for (let index = 0; index < numbers.length; index++){
    soma = soma + numbers[index];
    if (numbers[index] > maior){
        maior = numbers[index];
    }
    if (numbers[index] % 2 != 0){
        somaImpares++;
    }
}
if (somaImpares == 0){
    console.log("Não tem nenhum número ímpar");
}
let media = soma/numbers.length;
if (media > 20){
    console.log("Mêdia maior que 20");
}else{
    console.log("Mêdia menor que vinte");
}

for (let index = 0; index < numbers.length; index++){
    menor = Math.min.apply(Math, numbers[index]);
}

console.log("Menor número digitado: "+menor);
console.log("Quantidade dos ímapares foi: "+somaImpares);
console.log("Maior numero foi: "+maior)
console.log("Mêdia aritmetica dos números "+media);
console.log("Soma dos valores "+soma);