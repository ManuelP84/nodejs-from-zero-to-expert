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

const getInfoEmployee = async (id) => {
  try {
    const employee = await getEmployeeById(id);
    const salary = await getSalaryById(id);

    return `The employee ${employee} has a salary of ${salary}`;
  } catch (error) {
    //return error; // This return goes to the then. If we need to use the reject we have to use throw
    throw error;
  }
};

const id = 3;

getInfoEmployee(id)
  .then((msg) => {
    // If we use the return in the cath
    console.log("Everything went OK");
    console.log(msg);
  })
  .catch((msg) => {
    // If we need use the throw
    console.log("Everything went wrong");
    console.log(msg);
  });
