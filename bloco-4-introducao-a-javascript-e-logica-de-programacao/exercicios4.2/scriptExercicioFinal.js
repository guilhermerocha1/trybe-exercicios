let numbers = [80, 180, 67, 12, 70, 81, 16, 120, 34, 10];
let soma = 0, somaImpares = 0, menor, maior;

for (let index = 0; index < numbers.length; index++){
    soma = soma + numbers[index];
    if(index == 1){
        maior = numbers[index];
        menor = numbers[index];
    }
    else if (numbers[index] < menor){
        menor = numbers[index];
    }
    else if (numbers[index] > maior){
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

console.log("Menor número digitado: "+menor);
console.log("Quantidade dos ímapares foi: "+somaImpares);
console.log("Maior numero foi: "+maior)
console.log("Mêdia aritmetica dos números "+media);
console.log("Soma dos valores "+soma);