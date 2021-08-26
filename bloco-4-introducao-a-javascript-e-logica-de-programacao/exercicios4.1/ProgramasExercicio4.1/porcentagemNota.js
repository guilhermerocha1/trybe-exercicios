const porc = -2;

if (porc == 100 && porc >=90){
    console.log("A");
}

else if(porc < 90 && porc >= 80){
    console.log("B");
}

else if(porc < 80 && porc >= 70){
    console.log("C");
}

else if(porc < 70 && porc >= 60){
    console.log("D");
}

else if(porc < 60 && porc >= 50){
    console.log("E");
}

else if(porc < 50 && porc >= 0){
    console.log("F");
}

else {
    console.log("ERRO:nota não computada ou não existe");
}