const colors = require("colors");

const { showMenu, pause } = require("./helpers/messages");

console.clear();

const app = async () => {
  let option = "";
  do {
    option = await showMenu();
    await pause();
  } while (option !== "0");
};

app();
