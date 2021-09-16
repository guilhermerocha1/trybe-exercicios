let estadosArray = ['Acre', "Amazonas", "Amapa", "Alagoas", "Bahia"
,"Ceará", "Espírito Santo", "Goiás", "Maranhã", "Mato Grosso", "Mato Groso do Sul"
, "Minas Gerais", "Pará", "Paraíba", "Pernambuco", "Piauí", "Rio de Janeiro", 
"Rio Grande do Norte", "Rio Grande do Sul", "Ronraima", "Rondônia", "Santa Catarina"
, "São Paulo", "Sergipe", "Tocatins", "Distrito Federal"];
const estadosId = document.querySelector('#estados');

function ContadorEstados(){
  for (let index = 0; index < estadosArray.length; index += 1){
    const createOpition = document.createElement('option');
    const AddOpition = estadosId.appendChild(createOpition);
    AddOpition.innerText = estadosArray[index];
  }
}
const button = document.querySelector("#button-enviar")

button.addEventListener('click', function(event){
  event.preventDefault();
})

const inputs = document.querySelector('input')

function Limpandoinputs(){
  for(let index = 0; index < inputs.length; index += 1){
    inputs[index].value = '';
  }
}

inputs.addEventListener('click', Limpandoinputs)
estadosId.addEventListener('click', ContadorEstados());