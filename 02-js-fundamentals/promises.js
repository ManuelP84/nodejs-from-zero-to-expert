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
const getEmployeeById = (id) => {
  return new Promise((resolve, reject) => {
    const employee = employees.find((e) => e.id === id)?.name;

    employee
      ? resolve(employee)
      : reject(`The employee with id: ${id} was not found!`);
  });
};

// getEmployeeById definition
const getSalaryById = (id) => {
  return new Promise((resolve, reject) => {
    const salary = salaries.find((s) => s.id === id)?.salary;

    salary
      ? resolve(salary)
      : reject(`The salary from id: ${id} was not found!`);
  });
};

const id = 1;

// getEmployeeById(id)
//   .then((employee) => console.log(employee))
//   .catch((err) => console.log(err));

//   getSalaryById(id)
//     .then((salary) => console.log(salary))
//     .catch((err) => console.log(err));

getEmployeeById(id)
  .then((employee) => {
    getSalaryById(id)
      .then((salary) =>
        console.log(
          "The empleyee",
          employee,
          "with id",
          id,
          "has a salary of",
          salary
        )
      )
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
