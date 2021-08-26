const valorRevenda = 10;
const valorVenda = 18;

if (valorRevenda > 0){
    let imposto = (20*valorRevenda)/100;
    console.log(valorVenda - (valorRevenda + imposto));
}else {
    console.log("ERRO:valor do produto inválido")
}