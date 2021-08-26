let peca = "raio";

switch (peca){
    case "bispo":
        console.log("diagonais");
        break;
    case "cavalo":
        console.log("em L");
        break;
    case "torre":
        console.log("verticais e horizontais");
        break;
    default:
        console.log("Erro:peça informada não existe");
}