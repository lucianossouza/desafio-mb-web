const express = require('express');
const cors = require('cors');
const app = express();
const path = require("path");

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/assets", express.static(path.join(__dirname, "../dist/assets")));
app.use(express.static(path.join(__dirname, "../dist")));

app.get("/registration", (_, res) => {
  res.sendFile(path.join(__dirname, "../public", "registration.html"));
});

app.use((_, res) => {
  res.status(404).send("Página não encontrada.");
});

app.post('/registration', (req, res) => {
  const formData = req.body;
  res.json({ success: true, message: 'Formulário enviado com sucesso!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
