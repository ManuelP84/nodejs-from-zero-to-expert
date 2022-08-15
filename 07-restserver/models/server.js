const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.userPath = "/api/users";

    // Middlewares
    this.middlewares();

    // App routes
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Read and parse of the body
    this.app.use(express.json());

    //Public deirectory
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.userPath, require("../routes/user"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

module.exports = Server;
