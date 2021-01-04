const Mue = require('./lib/index.js');
const mue = new Mue();

mue.randomQuote().then(res => console.log(res))