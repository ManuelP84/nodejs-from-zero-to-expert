const { createFile } = require("./helpers/createFile");
const argv = require('yargs').argv;

// Exercise 3.

console.clear();


// 1. Old method to recive the base by the command line "--base=number"

// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5] = arg3.split('='); 
// console.log(base);

// 2. Best method is using yargs
console.log(argv);
console.log('base: yargs', argv);


const base = 6;

createFile(base)
  .then((fileName) => console.log(fileName, "created"))
  .catch((error) => console.log(error));