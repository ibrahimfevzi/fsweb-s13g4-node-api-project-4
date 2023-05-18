const express = require("express");
const server = express();

server.get("/", (req, res) => {
  console.log("Get request...");
  res.json({
    message: process.env.MESSAGE || "Welcome to my Heroku app!...",
    status: 200,
  });
});

module.exports = server;
