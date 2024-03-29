"use strict";
// ./index.ts
exports.__esModule = true;
var Exercise = require("./exercises");
console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log("A soma do array \u00E9 igual a ".concat(Exercise.sumArray([3, 6, 9])));
console.log("Tri\u00E2ngulo de base 10cm e altura 25cm: ".concat(Exercise.triangle(10, 25), "cm\u00B2"));
console.log("Tri\u00E2ngulo de base 5cm e altura 30cm: ".concat(Exercise.triangle(5, 30), "cm\u00B2"));
console.log("Tri\u00E2ngulo de base 100cm e altura 200cm: ".concat(Exercise.triangle(100, 200), "cm\u00B2"));
console.log("Quadrado de lado 10cm: ".concat(Exercise.square(10), "cm\u00B2"));
console.log("Quadrado de lado 5cm: ".concat(Exercise.square(5), "cm\u00B2"));
console.log("Quadrado de lado 100cm: ".concat(Exercise.square(100), "cm\u00B2"));
console.log("Ret\u00E2ngulo de base 10cm e altura 25cm: ".concat(Exercise.rectangle(10, 25), "cm\u00B2"));
console.log("Ret\u00E2ngulo de base 5cm e altura 30cm: ".concat(Exercise.rectangle(5, 30), "cm\u00B2"));
console.log("Ret\u00E2ngulo de base 100cm e altura 200cm: ".concat(Exercise.rectangle(100, 200), "cm\u00B2"));
console.log("Losango de Diagonal maior 10 e diagonal menor 5: ".concat(Exercise.losango(32, 18)));
console.log("trapezio base maior 10 e base menor 5 e altura 3: ".concat(Exercise.trapezio(3, 10, 3)));
