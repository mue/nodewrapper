const fetch = require('node-fetch');

module.exports = class API {
  constructor(baseURL) {
    this.baseURL = (baseURL) ? baseURL : 'https://api.muetab.com';
  }

  async randomImage(category) {
    const cat = (category) ? `?category=${category}` : '';
    return await (await fetch(`${this.baseURL}/images/random${cat}`)).json();
  }

  async getImageCategories() {
    return await (await fetch(`${this.baseURL}/images/categories`)).json();
  }

  async randomQuote(language) {
    const lang = (language) ? `?language=${language}` : '';
    return await (await fetch(`${this.baseURL}/quotes/random${lang}`)).json();
  }

  async getQuoteLanguages() {
    return await (await fetch(`${this.baseURL}/quotes/languages`)).json();
  }
}