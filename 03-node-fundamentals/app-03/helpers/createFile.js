const fs = require("fs");

const createFile = async (base) => {
  try {
    console.log("=====================================");
    console.log(`*****MULTIPLICATION TABLE OF ${base}*****`);
    console.log("=====================================");

    let output = "";
    const filename = `table-${base}.txt`;

    for (let index = 1; index <= 10; index++) {
      output += `${base} x ${index} equals: ${base * index}\n`;
    }

    fs.writeFileSync(filename, output);

    console.log(output);
    return filename;
    
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createFile,
};
