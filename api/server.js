const express = require("express");

const server = express();
const router = require("./users/users-router");

server.use(express.json()); //json istekleri destekler.

server.use("/api", router);

server.get("/", (req, res) => {
  res.json({ message: "express is working" });
});

module.exports = server;
