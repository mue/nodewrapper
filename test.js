const Mue = require('./index.js');
const mue = new Mue()

mue.randomImg('', 'webp').then(res => console.log(res))