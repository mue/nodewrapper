const Mue = require('./lib/index.js');
const mue = new Mue();

mue.randomQuote().then(res => console.log(res));
mue.randomQuote('Français').then(res => console.log(res));
mue.getQuoteLanguages().then(res => console.log(res));
mue.randomImage().then(res => console.log(res));
mue.getImageCategories().then(res => console.log(res));
