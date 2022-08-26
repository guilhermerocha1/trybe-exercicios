const personage = require('./simpsons.json');

// const simpsonsPersonage = (arr) => {
//   const promise = new Promise((resolve, reject) => {
//     if(arr.length === 0) reject(new Error('Alguma coisa deu errado'));
//     const result = arr.map((personage) => `${personage.id} - ${personage.name}`)
//     resolve(result);
//   })

//   return promise;
// }

// simpsonsPersonage(personage)
//   .then(result => console.log(result))
//   .catch(err => console.log(err.message));

async function filterPersonage(id) {
  try {
    const promise = personage.filter((personagem) => personagem.id === id);
    console.log(promise);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

filterPersonage(11);