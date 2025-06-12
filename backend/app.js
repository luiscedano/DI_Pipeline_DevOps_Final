const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor backend funcionando con DevOps 🚀');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
}); 