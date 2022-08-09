const colors = require("colors");
const { resolve } = require("path");

const showMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("======================".green);
    console.log("   Select an option".green);
    console.log("======================\n".green);

    console.log(`${"1".green}. Create a new todo`);
    console.log(`${"2".green}. List todo's`);
    console.log(`${"3".green}. List todo's completed`);
    console.log(`${"4".green}. List todo's pending`);
    console.log(`${"5".green}. Complete a todo`);
    console.log(`${"6".green}. Delete todo`);
    console.log(`${"0".green}. Exit\n`);

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Select an option: ", (option) => {
      readline.close();
      resolve(option);
    });
  });
};

const pause = () => {
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\nPress ${"ENTER".green} to continue...\n`, (option) => {
      readline.close();
      resolve();
    });
  });
};

module.exports = {
  showMenu,
  pause,
};
