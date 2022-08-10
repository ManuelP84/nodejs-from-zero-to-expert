const colors = require("colors");
const Task = require("./models/task");
const Tasks = require("./models/tasks");
const { saveFile, readFile } = require("./helpers/dbUtils");
//const { showMenu, pause } = require("./helpers/messages");

const {
  inquirerMenu,
  inquirerPause,
  readInput,
} = require("./helpers/inquirer");

const app = async () => {
  let option = "";
  const tasks = new Tasks();
  const tasksDb = readFile();

  if (tasksDb) {
    // Establecer tasks
    tasks.loadTasksFromDb(tasksDb);
  }

  do {
    //option = await showMenu();
    //await pause();

    option = await inquirerMenu();

    switch (option) {
      case "1":
        // Create a new task
        const description = await readInput(
          "Please enter the task description: "
        );
        console.log(description);
        tasks.createTask(description);
        break;

      case "2":
        // List tasks
        tasks.listTasks();

        break;

      case "3":
        // List done tasks
        tasks.listDoneTasks(true);

        break;

      case "4":
        // List pending tasks
        tasks.listDoneTasks(false);

        break;
    }

    saveFile(tasks.listArray);

    await inquirerPause();
  } while (option !== "0");
};

app();
