const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

// 🔹 caminho do arquivo
const filePath = path.join(__dirname, "../data/users.json");

// 🔹 GET /users
router.get("/", (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send({
        message: "Erro ao ler os usuários",
      });
    }

    const users = JSON.parse(data);
    res.send(users);
  });
});

// 🔹 GET /users/:id
router.get("/:id", (req, res) => {
  const { id } = req.params;

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send({
        message: "Erro ao ler os usuários",
      });
    }

    const users = JSON.parse(data);
    const user = users.find((u) => u._id === id);

    if (!user) {
      return res.status(404).send({
        message: "ID do usuário não encontrado",
      });
    }

    res.send(user);
  });
});

module.exports = router;
