const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/registration', (req, res) => {
  const formData = req.body;
  res.json({ success: true, message: 'Formulário enviado com sucesso!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
