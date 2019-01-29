const path = require('path');

let config = {
  master: process.env.MASTER_ID,
  prefix: '.',
  database: {
    username: 'username',
    password: 'password',
    database: 'database',
    provider: 'sqlite',
    storage: path.join(__dirname, '..', 'storage.sqlite')
  }
};
module.exports = config;