const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // Middlewares
    this.middlewares();

    // App routes
    this.routes();
  }

  middlewares() {
    //Public deirectory
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.get("/api", function (req, res) {
      res.status(403).json({
        message: "get api",
      });
    });

    this.app.put("/api", function (req, res) {
        res.status(403).json({
          message: "put api",
        });
      });

      this.app.post("/api", function (req, res) {
        res.status(403).json({
          message: "post api",
        });
      });

      this.app.delete("/api", function (req, res) {
        res.status(403).json({
          message: "delete api",
        });
      });

      this.app.patch("/api", function (req, res) {
        res.status(403).json({
          message: "patch api",
        });
      });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

module.exports = Server;
