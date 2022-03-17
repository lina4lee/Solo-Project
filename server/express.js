const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.json({ message: 'get request received' });
});

app.post('/', (req, res) => {
  res.send('hello');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})