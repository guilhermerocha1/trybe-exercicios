const repeat = (number, action) => {
  for (let count = 1; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(`${number} is even`);
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(`${number} is odd`);
  }
};

repeat(3, isOdd);
repeat(3, isEven);