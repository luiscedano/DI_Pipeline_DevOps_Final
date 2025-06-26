const client = require('prom-client');
const collectDefault = client.collectDefaultMetrics;
collectDefault();

app.get('/metrics', async (_req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => res.send('Servidor escuchando'));
app.get('/api', (_req, res) => res.json({ ok: true, t: Date.now() }));

// Mongo opcional ► si prefieres SQLite, cambia esta sección
if (process.env.MONGO_URI) {
  const { MongoClient } = require('mongodb');
  MongoClient.connect(process.env.MONGO_URI)
    .then(client => {
      app.locals.db = client.db();         // disponible vía req.app.locals.db
      console.log('Conectado a Mongo');
    })
    .catch(err => console.error(err));
}

app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`));

module.exports = app; // para supertest 