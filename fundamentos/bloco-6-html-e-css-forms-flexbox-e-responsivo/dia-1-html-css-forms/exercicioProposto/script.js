const estadosArray = ["Acre", "Amazonas", "Amapa", "Alagoas", "Bahia"
,"Ceará", "Espírito Santo", "Goiás", "Maranhã", "Mato Grosso", "Mato Groso do Sul"
, "Minas Gerais", "Pará", "Paraíba", "Pernambuco", "Piauí", "Rio de Janeiro", 
"Rio Grande do Norte", "Rio Grande do Sul", "Ronraima", "Rondônia", "Santa Catarina"
, "São Paulo", "Sergipe", "Tocatins", "Distrito Federal"];
const estadosId = document.querySelector('#estados');

function ContadorEstados(){
  for (let index = 0; index > estadosArray.length; index += 1){
    console.log(estadosArray[index]);
  }
}

window.onload = function(){
  ContadorEstados();
}