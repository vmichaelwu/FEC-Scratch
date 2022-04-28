const db = require('../../database/index.js');

const getUsers = (req, res) => {
  const queryString = 'SELECT * FROM users;';

  db.query(queryString, (error, results, fields) => {
    console.log('RESULTS', results);
    res.send(results);
  });
};

module.exports = {
  getUsers: getUsers,
};
