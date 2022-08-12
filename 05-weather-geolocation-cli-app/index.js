const colors = require("colors");
require("dotenv").config();

const {
  inquirerMenu,
  inquirerPause,
  readInput,
  listPlaces,
} = require("./helpers/inquirer");
const Searching = require("./models/searching");

const main = async () => {
  const search = new Searching();
  let input;

  do {
    input = await inquirerMenu();

    switch (input) {
      case 1:
        // This case correspond to find a city

        // Show message
        const input = await readInput("Place to find: ");
        console.log({ input });

        // Search places
        const cities = await search.cities(input);

        // Select a place
        const idPlaceSelected = await listPlaces(cities);
        if (idPlaceSelected === "0") continue;
        const placeSelected = cities.find(
          (place) => place.id === idPlaceSelected
        );

        // Save in DB
        search.addToHistory(placeSelected.name);

        // Weather
        const weather = await search.weather(
          placeSelected.lat,
          placeSelected.long
        );

        // Show results
        console.clear();
        console.log("\nCity information\n".green);
        console.log("City: ", colors.blue(placeSelected.name));
        console.log("Lat: ", colors.blue(placeSelected.lat));
        console.log("Long: ", colors.blue(placeSelected.long));
        console.log("Temperature: ", colors.blue(weather.temp + " °C"));
        console.log("Min: ", colors.blue(weather.tempMin + " °C"));
        console.log("Max: ", colors.blue(weather.tempMax + " °C"));
        console.log("Weather details: ", colors.blue(weather.description));

        break;
      case 2:
        // History

        search.historyCapitalized.forEach((place, index) => {
          const idx = `${index + 1}.`.green;
          console.log(`${idx} ${place}`);
        });

        break;
    }

    if (input !== 0) await inquirerPause();
  } while (input !== 0);
};

main();
