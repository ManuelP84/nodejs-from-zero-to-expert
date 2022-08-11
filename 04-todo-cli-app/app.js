const colors = require("colors");
const Task = require("./models/task");
const Tasks = require("./models/tasks");
const { saveFile, readFile } = require("./helpers/dbUtils");
//const { showMenu, pause } = require("./helpers/messages");

const {
  inquirerMenu,
  inquirerPause,
  readInput,
  listTasksToDelete,
  confirm,
  showListCheckbox,
} = require("./helpers/inquirer");

const app = async () => {
  let option = "";
  const tasks = new Tasks();
  const tasksDb = readFile();

  if (tasksDb) {
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

      case "5":
        // Complete tasks
        const ids = await showListCheckbox(tasks.listArray);
        //console.log(ids);
        tasks.completeTask(ids);

        break;

      case "6":
        // Delete tasks
        const id = await listTasksToDelete(tasks.listArray);
        if (id !== "0") {
          const ok = await confirm("Are you sure you want to delete?");
          ok && tasks.deleteTask(id);
        }
        break;
    }

    saveFile(tasks.listArray);

    await inquirerPause();
  } while (option !== "0");
};

app();
