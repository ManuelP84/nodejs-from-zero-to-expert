const colors = require("colors");

const { showMenu, pause } = require("./helpers/messages");
const { inquirerMenu, inquirerPause } = require("./helpers/inquirer");

console.clear();

const app = async () => {
  let option = "";
  do {
    //option = await showMenu();
    //await pause();
    option = await inquirerMenu();
    await inquirerPause();
    //console.log({option})
  } while (option !== "0");
};

app();
