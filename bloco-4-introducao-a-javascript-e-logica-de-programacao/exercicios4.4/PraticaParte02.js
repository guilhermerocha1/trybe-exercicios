let palavra = "rua";
let Askfalse;

function testpalimdromo(str){

    let splitString = str.split("");

    let reverseArray = splitString.reverse("");

    let joinArray = reverseArray.join("");

    if (palavra === joinArray){
        return Askfalse = true;
    }else {
        return Askfalse = false;
    }

}
testpalimdromo(palavra);
console.log(Askfalse);