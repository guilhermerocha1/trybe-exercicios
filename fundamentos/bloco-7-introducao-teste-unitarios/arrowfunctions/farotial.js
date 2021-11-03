const fatorial = (num) => {
  let mult = 1, fatorial = 0;
  if (num === 0) return 0;
  else{
    for (let i = 1; i < num; i += 1) {
      mult = num * i;
      fatorial += mult;
    }
  }
  return `${num}! = ${fatorial}`;
}

console.log(fatorial(4));