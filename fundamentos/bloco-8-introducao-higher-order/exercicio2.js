const sortFunction = () => {
  return Math.round(Math.random() * (5 - 1) + 1);
}

const testNumbers = (myNumber, numberSort) => {
  if (myNumber !== numberSort) return `Tente Novamente, número sorteado foi ${numberSort}`;
  if (myNumber === numberSort) return 'Parábens você ganhou';
}

console.log(testNumbers(2, sortFunction()));