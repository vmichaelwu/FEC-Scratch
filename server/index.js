const express = require('express');
const app = express();
const port = 3000;

const controller = require('../server/controller/index.js');

const myLogger = function (req, res, next) {
  console.log('LOGGED');
  next();
};
app.use(myLogger);

app.use(express.static('client/dist'));

app.get('/api/users', controller.getUsers);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
