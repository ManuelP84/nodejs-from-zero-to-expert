const fs = require("fs");

const fileName = `./db/tasks.json`;

const saveFile = (data) => {
  try {
    fs.writeFileSync(fileName, JSON.stringify(data));
  } catch (error) {
    throw error;
  }
};

const readFile = () => {
  if (!fs.existsSync(fileName)) {
    return null;
  }
  const data = fs.readFileSync(fileName, { encoding: "utf-8" });
  const json_data = JSON.parse(data);
  return json_data;
};

module.exports = {
  saveFile,
  readFile,
};
