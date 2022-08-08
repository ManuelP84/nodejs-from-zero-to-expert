// var -- DON'T USE ANYMORE!
var name = "Manuel";

if (true) {
  var name = "guillermo"; // Here global variable name is overwrite
}

console.log(name);

// let -- Scope variable
let id = "document";

if (true) {
  let id = "passport"; // Here global variable id is not overwrite
}

console.log(id);

// const -- Scope variable
const city = "bogota";

if (true) {
  const city = "medellin"; // Here city belong to a diferent scope
}

console.log(city);
