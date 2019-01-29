const Bot = require('salabot').Bot;
const cleverbot = require('salabot-cleverbot')(
  process.env.CLEVERBOT_USER,
  process.env.CLEVERBOT_APIKEY
);
const config = require('./config');

let bot = new Bot(config);

bot.init()
.then(() => bot.addModule(cleverbot))
.then(() => bot.start(process.env.BOT_TOKEN))
.catch((err) => console.log(err));

module.exports = bot;