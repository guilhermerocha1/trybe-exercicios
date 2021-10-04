function msg() {
  return "Acordando!!";
}

function cafe() {
  return "Bora tomar café!!";
}

function dormir() {
  return "Partiu dormir!!";
}

const doingThings = (func) => func(msg, cafe, dormir);

console.log(doingThings(cafe));