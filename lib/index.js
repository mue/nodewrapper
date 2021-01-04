const fetch = require('node-fetch');

module.exports = class API {
  constructor(baseURL) {
    this.baseURL = (baseURL) ? baseURL : 'https://api.muetab.com';
  }

  async randomImg(category, webp) {
    const cat = (category) ? `?category=${category}` : '';
    const useWebp = (webp) ? '?webp=true' : '';
    return await (await fetch(`${this.baseURL}/getImage${cat + useWebp}`)).json();
  }

  async randomQuote() {
    return await (await fetch(`${this.baseURL}/getQuote`)).json();
  }

  async getCategories() {
    return await (await fetch(`${this.baseURL}/getCategories`)).json();
  }

  async getUpdate() {
    return await (await fetch(`${this.baseURL}/getUpdate`)).json();
  }
}