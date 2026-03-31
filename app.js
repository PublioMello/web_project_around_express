const express = require("express");
const app = express();

const usersRoutes = require("./routes/users");
const cardsRoutes = require("./routes/cards");

// rotas principais
app.use("/users", usersRoutes);
app.use("/cards", cardsRoutes);

// fallback 404
app.use((req, res) => {
  res.status(404).send({
    message: "A solicitação não foi encontrada",
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
