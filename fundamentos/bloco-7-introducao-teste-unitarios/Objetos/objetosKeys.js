const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listKeys = (studant) => {
  const arrayKeys = Object.keys(studant);
  for (const i in arrayKeys){
    console.log(`${arrayKeys[i]}, Nivel ${studant[arrayKeys[i]]}`);
  }
}

// Estudante 1
listKeys(student1);