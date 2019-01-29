let result = require('dotenv').config();
if (result.error) {
  throw result.error;
}
let bot = require('./src/bot');

module.exports = {
  bot
};