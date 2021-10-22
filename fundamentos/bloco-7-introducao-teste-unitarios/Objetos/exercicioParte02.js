const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const adicionaTurno = (objeto, periodo) => {
  return objeto.turno = periodo;
}

adicionaTurno(lesson2, 'noite');
// console.log(lesson2);

const listKeysObject = (objeto) => {
  return Object.keys(objeto);
}
// console.log(listKeysObject(lesson1));

const listValuesObject = (objeto) => {
  return Object.values(objeto);
}

// console.log(listValuesObject(lesson2));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});;

console.log(allLessons);