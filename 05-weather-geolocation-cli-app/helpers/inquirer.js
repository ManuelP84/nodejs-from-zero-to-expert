const inquirer = require("inquirer");
const colors = require("colors");

// Function to display the menu
const inquirerMenu = async () => {
  const question = [
    {
      type: "list",
      name: "option",
      message: "What do you want to do?",
      choices: [
        {
          value: 1,
          name: `${"1.".green} Find a city`,
        },
        {
          value: 2,
          name: `${"2.".green} History`,
        },
        {
          value: 0,
          name: `${"0.".green} Exit`,
        },
      ],
    },
  ];

  console.clear();
  console.log("======================".green);
  console.log("   Select an option".white);
  console.log("======================".green);

  const { option } = await inquirer.prompt(question);

  return option;
};

// Function to create a pause
const inquirerPause = async () => {
  const pause = [
    {
      type: "input",
      name: "pause",
      message: `Press ${"ENTER".green} to continue...`,
    },
  ];

  console.log("\n");
  await inquirer.prompt(pause);
};

// Function to read an input from the system
const readInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "userInput",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Please enter a valid value!";
        }
        return true;
      },
    },
  ];

  const { userInput } = await inquirer.prompt(question);
  return userInput;
};

// Function to list all the places in the console
const listPlaces = async (places) => {
  const choices = places.map((place, index) => {
    return {
      value: place.id,
      name: `${(index + 1).toString().green + ".".green} ${place.name}`,
    };
  });

  choices.unshift({
    value: "0",
    name: `${"0.".green} ${"Cancel"}`,
  });

  const question = [
    {
      type: "list",
      name: "id",
      message: "Select the place",
      choices,
    },
  ];

  const { id } = await inquirer.prompt(question);

  return id;
};


module.exports = {
  inquirerMenu,
  inquirerPause,
  readInput,
  listPlaces,
};
