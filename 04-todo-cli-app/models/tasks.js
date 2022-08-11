const Task = require("./task");
const colors = require("colors");

/**
 * _list:
 *      {'uuid-h54ui3j5-k453o4n3-0sds9320: {id: 12, description: Somthing to do, isDonde: false}}
 */
class Tasks {
  _list = {};

  get listArray() {
    const arrayList = [];
    Object.keys(this._list).forEach((key) => {
      const task = this._list[key];
      arrayList.push(task);
    });
    return arrayList;
  }

  constructor() {
    this._list = {};
  }

  createTask(description = "") {
    const task = new Task(description);
    this._list[task.id] = task;
  }

  deleteTask(id){
    if(this._list[id]){
      delete this._list[id];
      console.log(`Task deleted!`.green)
    }
  }

  loadTasksFromDb(tasksArray = []) {
    tasksArray.forEach((task) => {
      this._list[task.id] = task;
    });
  }

  listTasks() {
    console.log();
    this.listArray.forEach((task, index) => {
      console.log(`${(index + 1).toString().green}${".".green} ${task.description} :: ${task.isDone ? "completed!".green : "pending...".red}`);
    });
  }

  listDoneTasks(completed) {
    console.log();
    let index = 1;
    this.listArray.forEach((task) => {
      if (completed && task.isDone) {
        console.log(`${(index + ".").toString().green} ${task.description} :: ${"completed!".green} :: ${task.isDone.toString().green}`);
        index++;
      }
      if (!completed && !task.isDone) {
        console.log(`${(index + ".").toString().green} ${task.description} :: ${"pending...".red}`);
        index++;
      }
    });
  }

  completeTask(ids = []) {
    this.listArray.forEach(t => {
      
      const task = this._list[t.id]; // In javascript the real object is updated because this assigment only takes the reference and it doent create a copy of the object.
      if(ids.includes(t.id)){
        task.isDone = new Date().toISOString();
      } else {
        task.isDone = null;
      }
    });
  }
}

module.exports = Tasks;
