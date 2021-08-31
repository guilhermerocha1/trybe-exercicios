let array = [2, 3, 6, 7, 10, 1];
let indiceMaior = 0;

function indiceFactor(numbers){

    for (let i in numbers){
        if (numbers[indiceMaior] > numbers[i]){
            indiceMaior = i;
        }
    }
    return indiceMaior;
}

indiceFactor(array);
console.log(indiceMaior);