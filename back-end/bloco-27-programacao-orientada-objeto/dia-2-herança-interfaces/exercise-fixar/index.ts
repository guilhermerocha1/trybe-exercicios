interface Animal {
	name: string;
}

class Animal implements Animal {

	constructor(public name: string, private birthDate: Date) {}

	get age (): number {
		const timediff = Math.abs( Date.now() - new Date(this.birthDate).getTime() );

		return Math.floor(timediff / (1000 * 3600 * 24) / 365.25);
	}
}

class Mammal extends Animal {
	walk() {
		console.log(`${this.name} esta andando!`);
	}
}

const lion = new Mammal(
	'Lion',
	new Date(Date.parse('August 04, 2019')),
);

const tiger = new Mammal(
	'Tigre',
	new Date(Date.parse('May 03, 2020')),
);


const main = (animal: Animal) => {
	console.log(animal.age);
}

class Bird extends Animal {
	fly() {
		console.log(`${this.name} esta vouando`);
	}
}

const papagaio = new Bird(
	'Papagaio',
	new Date(Date.parse('August 04, 2017'))
);

main(tiger);
lion.walk();
// papagaio.fly();
