const fetch = require('node-fetch');

module.exports = class API {
  constructor(baseURL) {
    this.baseURL = (baseURL) ? baseURL : 'https://api.muetab.xyz';
  }

  async randomImg(category, webp) {
    const cat = (category) ? `?category=${category}` : '';
    const useWebp = (webp) ? '?webp=true' : '';
    const data = await fetch(`${this.baseURL}/getImage${cat + useWebp}`);
    return data.json();
  }

  async randomQuote() {
    const data = await fetch(`${this.baseURL}/getQuote`);
    return data.json();
  }

  async getCategories() {
    const data = await fetch(`${this.baseURL}/getCategories`);
    return data.json();
  }

  async getUpdate() {
    const data = await fetch(`${this.baseURL}/getUpdate`);
    return data.json();
  }
}