const wump = require('wumpfetch'):

module.exports = class API {
  async randomImg(category) {
      const cat = (category) ? `?category=${category}` : '';
      const data = await wump(`https://api.muetab.xyz/getImage${category}`);
      return data.json();
  }
  
  async randomQuote() {
    const data = await wump('https://api.muetab.xyz/getQuote');
    return data.json();
  }
  
  async getCategories() {
    const data = await wump('https://api.muetab.xyz/getCategories');
    return data.json();
  }
  
  async getUpdate() {
    const data = await wump('https://api.muetab.xyz/getUpdate');
    return data.json();
  }
}
