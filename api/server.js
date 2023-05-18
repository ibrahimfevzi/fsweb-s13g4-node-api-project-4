const express = require("express");
const mw = require("./middleware/middleware.js");
const users = require("./user-model.js");

const server = express();

server.use(express.json());

server.get("/api/kullanicilar", (req, res) => {
  res.status(200).json(users.users);
});

module.exports = server;

server.post("/api/kayitol", (req, res) => {
  const newUser = req.body;
  if (newUser.kullaniciadi && newUser.sifre) {
    users.users.push(newUser);
    res.status(201).json(newUser);
  } else {
    res.status(400).json({ message: "Lütfen kullanıcı adı ve şifre girin" });
  }
});

server.post("/api/giris", (req, res) => {
  const { kullaniciadi, sifre } = req.body;
  if (kullaniciadi && sifre) {
    const user = users.users.find(
      (user) => user.kullaniciadi === kullaniciadi && user.sifre === sifre
    );
    if (user) {
      res.status(200).json({ message: "Hoşgeldiniz... Giriş başarılı" });
    } else {
      res.status(401).json({ message: "Kullanıcı adı veya şifre yanlış" });
    }
  } else {
    res.status(400).json({ message: "Lütfen kullanıcı adı ve şifre girin" });
  }
});

module.exports = server;
