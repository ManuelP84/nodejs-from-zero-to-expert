const fs = require("fs");
const colors = require("colors");

const createFile = async (base, list, to) => {
  try {
    let output = "";
    let consoleOutput = "";
    let fileName = `table-${base}.txt`;

    for (let index = 1; index <= to; index++) {
      consoleOutput += `${colors.yellow(base)} ${'x'.blue} ${colors.yellow(index)} ${'='.blue} ${colors.yellow(base * index)}\n`;
      output += `${base} x ${index} = ${base * index}\n`;
    }

    fs.writeFileSync(`./output/${fileName}`, output);

    if (list) {
      console.log("=====================================".blue);
      console.log('**** '.green, 'Multiplication table of:'.green, colors.yellow(base), ' ****'.green);
      console.log("=====================================".blue);
      console.log(consoleOutput);
    } else {
      fileName = null;
    }
    return fileName;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createFile,
};
