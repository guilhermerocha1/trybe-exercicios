let names = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
};


console.log("A jogadora "+names.name+" "+names.lastName+" tem "+names.age+" de idade");
console.log("A jogadora "+names.name+" "+names.lastName+" foi eleita a melhor do mundo "+names.bestInTheWorld.length+" vezes");
console.log("A jogadora possui "+names.medals.golden+" medalhas de ouro "+names.medals.silver+" medalhas de prata");