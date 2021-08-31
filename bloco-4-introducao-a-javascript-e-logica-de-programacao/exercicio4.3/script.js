let fruits = [3, 4, 5, 1, 1];
let somNumbers = 0;

for (let index = 0; index<fruits.length; index += 1){
    somNumbers += fruits[index];
}

if (somNumbers > 15){
    console.log(somNumbers);   
}else {
    console.log("valor menor que 16");
}