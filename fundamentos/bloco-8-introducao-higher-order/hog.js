const acorda = () => {
  return 'Acordando!!';
}

const cafe = () => {
  return 'Bora tomar café!!';
}

const dormir = () => {
  return 'Partiu dormir!!';
}

const doingThings = (frase) => {
  console.log(frase());
};

doingThings(dormir);