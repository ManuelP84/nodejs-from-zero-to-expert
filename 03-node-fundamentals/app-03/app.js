const { createFile } = require("./helpers/createFile");
const argv = require('./config/yargs');
const colors = require('colors');


console.clear();

//console.log(argv);

createFile(argv.b, argv.l, argv.t)
  .then((fileName) => fileName && console.log(`${fileName} created`.green))
  .catch((error) => console.log(error));
