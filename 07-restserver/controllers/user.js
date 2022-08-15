

const userGet =  (req, res) => {
    res.status(200).json({
      message: "get api",
    });
  }

  const userPut = (req, res) => {
    res.status(200).json({
      message: "put api",
    });
  }

  const userPost = (req, res) => {
    const { name, age } = req.body;
    res.status(200).json({
      message: "post api",
      name,
      age
    });
  }

  const userDelte = (req, res) => {
    res.status(200).json({
      message: "delete api",
    });
  }

  const userPatch = (req, res) => {
    res.status(200).json({
      message: "patch api",
    });
  }

  module.exports = {
    userGet,
    userPut,
    userPost,
    userPatch,
    userDelte,
  }