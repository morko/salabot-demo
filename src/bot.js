const Bot = require('salabot').Bot;
const cleverbotPlugin = require('salabot-cleverbot')(
  process.env.CLEVERBOT_USER,
  process.env.CLEVERBOT_APIKEY
);
const funPlugin = require('salabot-fun');
const config = require('./config');

let bot = new Bot(config);

bot.init()
.then(() => bot.addModule(cleverbotPlugin))
.then(() => bot.addModule(funPlugin))
.then(() => bot.start(process.env.BOT_TOKEN))
.catch((err) => console.log(err));

module.exports = bot;