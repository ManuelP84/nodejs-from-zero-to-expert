const userGet = (req, res) => {
  // Query params
  const { lastname, title = "no tittle" } = req.query;

  res.status(200).json({
    message: "get api",
    lastname,
    title,
  });
};

const userPut = (req, res) => {
  // Params. Also need to change the url route
  const { id } = req.params;

  res.status(200).json({
    message: "put api",
    id,
  });
};

const userPost = (req, res) => {
  // Body params
  const { name, age } = req.body;
  res.status(200).json({
    message: "post api",
    name,
    age,
  });
};

const userDelte = (req, res) => {
  res.status(200).json({
    message: "delete api",
  });
};

const userPatch = (req, res) => {
  res.status(200).json({
    message: "patch api",
  });
};

module.exports = {
  userGet,
  userPut,
  userPost,
  userPatch,
  userDelte,
};
