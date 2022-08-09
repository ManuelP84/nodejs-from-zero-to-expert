const fs = require('fs');


// Exercise 2.
// Save the table into a txt file

const base = 3;

console.clear();
console.log('=====================================');
console.log(`*****MULTIPLICATION TABLE OF ${base}*****`)
console.log('=====================================');

let output = '';

for (let index = 1; index <=10; index ++){
    output += `${base} x ${index} equals: ${base*index}\n`
}

fs.writeFile(`table-${base}.txt`, output, (err) => {
    if(err) throw err;
    console.log(`table-${base}.txt created`);
})

console.log(output);