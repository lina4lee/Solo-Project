const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());

// app.use(express.static(path.join(__dirname, 'dist/index.html')));

app.get('/', (req, res) => {
  res.send({ message: 'get request received' });
});
 
app.post('/', (req, res) => {
  res.send('hello');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})