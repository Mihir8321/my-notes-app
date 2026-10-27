const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ app: 'my-notes-app', status: 'ok' });
});

app.listen(port, () => {
  console.log(`my-notes-app listening on port ${port}`);
});