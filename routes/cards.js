const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

// 🔹 caminho do arquivo
const filePath = path.join(__dirname, "../data/cards.json");

// 🔹 GET /cards
router.get("/", (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send({
        message: "Erro ao ler os cards",
      });
    }

    const cards = JSON.parse(data);
    res.send(cards);
  });
});

// 🔹 GET /cards/:id
router.get("/:id", (req, res) => {
  const { id } = req.params;

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send({
        message: "Erro ao ler os cards",
      });
    }

    const cards = JSON.parse(data);
    const card = cards.find((c) => c._id === id);

    if (!card) {
      return res.status(404).send({
        message: "ID do card não encontrado",
      });
    }

    res.send(card);
  });
});

module.exports = router;
