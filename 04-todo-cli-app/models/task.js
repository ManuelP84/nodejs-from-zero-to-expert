const { v4: uuid } = require("uuid");

class Task {
  id = "";
  description = "";
  isDone = "";

  constructor(description) {
    this.description = description;
    this.id = uuid();
    this.isDone = null; // Try settting this attribute in false
  }
}

module.exports = Task;
