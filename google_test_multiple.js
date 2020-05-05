const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

let driver_fx = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

let driver_chr = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

let driver_saf = new webdriver.Builder()
.forBrowser('safari')
    .build();

searchTest(driver_fx);
searchTest(driver_chr);
searchTest(driver_saf);

function searchTest(driver) {

driver.get('http://www.google.com');

driver.sleep(10000).then(function() {
    driver.findElement(By.name('q')).sendKeys('webdriver');
    console.log('found element & typed');
    
}).then(function() {
    driver.sleep(2000).then(function() {
        driver.findElement(By.name('q')).sendKeys(webdriver.Key.TAB);
}).then(function() {

    var element = driver.findElement(By.name('btnK'));
    driver.executeScript("arguments[0].click();", element);

}).then(function() {
    driver.sleep(10000).then(function()  {

        driver.getTitle().then(function(title) {
                console.log("got title", title);
                if(title === 'webdriver - Google Search') {
                console.log('Test passed');
                } else {
                console.log('Test failed');
                }

                driver.quit();

            });
        });
    });
});
 
}