const db = require('../../database/index.js');

const getUsers = (req, res) => {
  const queryString = 'SELECT * FROM users;';

  db.query(queryString, (error, results, fields) => {
    console.log('RESULTS', results);
    res.send(results);
  });
};

const createToDo = (req, res) => {
  console.log('body', req.body);
  res.send('working');
};

const getList = (req, res) => {
  const id = req.query.id;

  const queryString = `SELECT * FROM checklist WHERE user_id = ${id}`;
  db.query(queryString, (error, results, fields) => {
    if (error) {
      throw error;
    } else {
      res.send(results);
    }
  });
};

module.exports = {
  getUsers: getUsers,
  createToDo: createToDo,
  getList: getList,
};
