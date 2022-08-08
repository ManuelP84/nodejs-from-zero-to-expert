// setTimeout(() => {
//     console.log('Hello World!')
// },1000);

// Callback
const getUserById = (id, callback) => {
  const user = {
    id,
    name: "Manuel",
  };

  setTimeout(() => {
    callback(user);
  }, 1500);
};

getUserById(10, ({ id, name }) => {
  console.log(id);
  console.log(name.toUpperCase());
});
