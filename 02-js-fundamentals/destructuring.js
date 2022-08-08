const deadpool = {
  name: "Wade",
  lastname: "Winston",
  power: "Regeneration",
  age: 50,
  getName() {
    return `${this.name} ${this.lastname} has the ${this.power} as the main power`;
  },
  getPower() {
    return `${this.power}`;
  },
};

// Destructuring

// Insted of doing this...

// const name = deadpool.name;
// const lastname = deadpool.lastname;
// const power = deadpool.power;
// console.log(`${name} ${lastname} ${power}`)

// You have the same result destructuring

// 1.
const { name, lastname, power, age = 0 } = deadpool;

console.log(`${name} ${lastname} ${power} ${age}`);

// 2.
function printHero({ name, lastname, power, age = 0 }) {
  // In this case is possible to change the value of the variables. Ex. const name = "other_name";
  console.log(`${name} ${lastname} ${power} ${age}`);
}
printHero(deadpool);

//3.
const people = ["manuel", "angie", "juan", "maria"];
const [person1, person2, person3, person4] = people;
console.log(person1, person2, person3, person4);

// 4.
const [, , , person5] = people;
console.log(person5);

// 5.
function printPeople([person1, person2, person3, person4]) {
  console.log(person1, person2, person3, person4);
}
printPeople(people);
