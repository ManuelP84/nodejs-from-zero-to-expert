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
          name: `${"1.".green} Create a new task`,
        },
        {
          value: "2",
          name: `${"2.".green} List all task's`,
        },
        {
          value: "3",
          name: `${"3.".green} List of task's completed`,
        },
        {
          value: "4",
          name: `${"4.".green} List of task's pending`,
        },
        {
          value: "5",
          name: `${"5.".green} Complete task`,
        },
        {
          value: "6",
          name: `${"6.".green} Delete task`,
        },
        {
          value: "0",
          name: `${"0.".green} Exit`,
        },
      ],
    },
  ];

  console.clear();
  console.log("======================".green);
  console.log("   Select an option".white);
  console.log("======================".green);

  const { option } = await inquirer.prompt(menuOptions);

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

const listTasksToDelete = async (tasks) => {
  const choices = tasks.map((task, index) => {
    return {
      value: task.id,
      name: `${(index + 1).toString().green + ".".green} ${task.description}`,
    };
  });

  choices.unshift({
    value: "0",
    name: `${"0.".green} ${"Cancel"}`,
  });

  const questions = [
    {
      type: "list",
      name: "id",
      message: "Delete",
      choices,
    },
  ];

  const { id } = await inquirer.prompt(questions);

  return id;
};

const confirm = async (message) => {
  const question = [
    {
      type: "confirm",
      name: "ok",
      message,
    },
  ];

  const { ok } = await inquirer.prompt(question);

  return ok;
};

module.exports = {
  inquirerMenu,
  inquirerPause,
  readInput,
  listTasksToDelete,
  confirm,
};
