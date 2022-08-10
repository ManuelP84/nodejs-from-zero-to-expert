const inquirer = require("inquirer");
const colors = require("colors");

// Function to display the menu
const inquirerMenu = async () => {
  const menuOptions = [
    {
      type: "list",
      name: "option",
      message: "What do you want to do?",
      choices: [
        {
          value: "1",
          name: "1. Create a new todo",
        },
        {
          value: "2",
          name: "2. List todo's",
        },
        {
          value: "3",
          name: "3. List todo's completed",
        },
        {
          value: "4",
          name: "4. List todo's completed",
        },
        {
          value: "5",
          name: "5. List todo's pending",
        },
        {
          value: "6",
          name: "6. Delete todo",
        },
        {
          value: "0",
          name: "0. Exit",
        },
      ],
    },
  ];

  console.clear();
  console.log("======================".green);
  console.log("   Select an option".green);
  console.log("======================".green);

  const { option } = await inquirer.prompt(menuOptions);
  console.log(option);

  return option;
};

// Function to create a pause
const inquirerPause = async () => {
  const pauseOption = [
    {
      type: "input",
      name: "pause",
      message: `Press ${"ENTER".green} to continue...`,
    },
  ];

  console.log("\n");
  await inquirer.prompt(pauseOption);
};

module.exports = {
  inquirerMenu,
  inquirerPause,
};
