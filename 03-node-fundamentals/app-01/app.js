
// Exercise 1.
// Multiply 5 by 1, 2, 3...10

const base = 5;

console.clear();
console.log('=====================================');
console.log(`*****MULTIPLICATION TABLE OF ${base}*****`)
console.log('=====================================');


for (let index = 1; index <=10; index ++){
    console.log(`${base} x ${index} equals: ${base*index}`)
}