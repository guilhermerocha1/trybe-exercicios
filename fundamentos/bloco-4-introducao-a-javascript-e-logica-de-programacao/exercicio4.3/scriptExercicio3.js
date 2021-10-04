let n = 15;
let somaDivisor = 0;

for (let cont = 1; cont<=n; cont+=1){
    if (n % cont == 0){
        somaDivisor+=1;
    }
}
if (somaDivisor > 2){
    console.log(n+" não é primo");
} else {
    console.log(n+" é primo");
}