const module1 = require('./module1');
const module2 = require('./module2');
const module3 = require('./module3');
const module4 = require('./module4');


const name = "treza";
const hobby = "renang";

console.log(module1.sayHello(name));
console.log(module2.sayHi(name));
console.log(module3.sayHobby(hobby));
console.log(module4.sayNothing());