const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello from CI/CD pipeline!', status: 'ok' });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

app.post('/data', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'name is required' });
  res.status(201).json({ received: name });
});

module.exports = app;