const employees = [
  { id: 1, name: "manuel" },
  { id: 2, name: "juan" },
  { id: 3, name: "maria" },
];

const salaries = [
  { id: 1, salary: "1000" },
  { id: 2, salary: "1500" },
];

// getEmployeeById definition
const getEmployeeById = (id, callback) => {
  const employee = employees.find((e) => e.id === id)?.name;
  if (employee) {
    return callback(null, employee);
  }
  return callback(`The employee ${id} was not found!`);
};

// getSalaryById definition
const getSalaryById = (id, callback) => {
  const salary = salaries.find((s) => s.id === id)?.salary;
  if (salary) {
    return callback(null, salary);
  }
  return callback(`Salary from id ${id} was not found!`);
};

const id = 3;

// Call getEmployeeById function
getEmployeeById(id, (err, employee) => {
  if (err) {
    console.log("ERROR: ");
    console.log(err);
  } else {
    // Call getSalaryById function
    getSalaryById(id, (err, salary) => {
      if (err) {
        return console.log(err);
      }
      console.log("The employee", employee, "has the salary:", salary);
    });
  }
});
