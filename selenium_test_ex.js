
const {Builder} = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');

(async function myFunction() {
    let driver = await new Builder().forBrowser('chrome').build();
    //your code inside this block
})();
  
