const yargs = require("yargs");

// 1. Best method is using yargs

const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: "true",
    describe: 'The base of the multiplication table.'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "Base must be a number!";
    }
    return true;
  })
  .option("l", {
    alias: "list",
    type: "boolean",
    default: false,
    describe: 'Print the multiplication table.'
  })
  .option('t', {
    alias: 'to',
    type: 'number',
    default: 10,
    describe: 'The limit of the multiplication table'
  })
  .argv;

  module.exports = argv;



// 2. Old method to recive the base by the command line "--base=number". Do not use it.

// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5] = arg3.split('=');
// console.log(base);


