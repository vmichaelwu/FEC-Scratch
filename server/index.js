const express = require('express');
const app = express();
const port = 3000;

const myLogger = function (req, res, next) {
  console.log('LOGGED');
  next();
};

app.use(express.static('client/dist'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
