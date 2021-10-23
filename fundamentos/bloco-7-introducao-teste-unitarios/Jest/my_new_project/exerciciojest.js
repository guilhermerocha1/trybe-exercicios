function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz (num) {
  if (num === 0 || typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
}

function encode(stringReturn) {
  // seu código aqui
  for (let i = 0; i <= stringReturn.length; i+=1){
    if (stringReturn[i] === "a"){
      stringReturn[i] = 1;
    }
    else if (stringReturn[i] === "e"){
      stringReturn[i] = 2;
    }
    else if (stringReturn[i] === "i"){
      stringReturn[i] = 3;
    }
    else if (stringReturn[i] === "o"){
      stringReturn[i] = 4;
    }
    else if (stringReturn[i] === "u"){
      stringReturn[i] = 5;
    }
  }
  return stringReturn;
}

function decode(arrayConv) {
  // seu código aqui
  for (let i = 0; i <= arrayConv.length; i+=1){
    if (arrayConv[i] === "1"){
      arrayConv[i] = "a";
    }
    else if (arrayConv[i] === "2"){
      arrayConv[i] = "e";
    }
    else if (arrayConv[i] === "3"){
      arrayConv[i] = "i";
    }
    else if (arrayConv[i] === "4"){
      arrayConv[i] = "o";
    }
    else if (arrayConv[i] === "5"){
      arrayConv[i] = "u";
    }
  }
  return arrayConv;
}

module.exports = { sum, myRemove, myFizzBuzz, encode, decode };