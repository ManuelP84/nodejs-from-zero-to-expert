require("dotenv").config();
const {
  inquirerMenu,
  inquirerPause,
  readInput,
} = require("./helpers/inquirer");
const Searching = require("./models/searching");

const main = async () => {
  const search = new Searching();
  let input;

  do {
    input = await inquirerMenu();

    switch (input) {
      case 1:
        // Find a city

        // Show message
        const input = await readInput("Place to find: ");
        console.log({ input });

        // Search places

        await search.city(input);

        // Select a place

        // Weather

        // Show results

        console.log("\nCity information\n".green);
        console.log("City: ");
        console.log("Lat: ");
        console.log("Long: ");
        console.log("Temperature: ");
        console.log("Min: ");
        console.log("Max: ");

        break;
      case 2:
        // History

        break;
      case 1:
        break;

      default:
        break;
    }

    if (input !== 0) await inquirerPause();
  } while (input !== 0);
};

main();
