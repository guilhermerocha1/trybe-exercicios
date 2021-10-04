let array = [1, 2, 3, 4, 5, 6];


function getEvenNumbers(array) {
  let arrayPares = [];
  for (let index = 0; index < array.length; index += 1){
    if (array[index] % 2 === 0){
      arrayPares.push(array[index]);
    }
  }
  return arrayPares;
}

console.log(getEvenNumbers(array)); // kkkkkk vamo proximo