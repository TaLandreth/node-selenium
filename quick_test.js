const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    driver.get('http://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html');

    //By.id, By.name, By.class
    const button = driver.findElement(By.css('button:nth-of-type(1)'));

    button.click().then(function(text) {
        console.log('Clickied');
      });
  
    
      driver.sleep(2000).then(function() {
        
        let alert = driver.switchTo().alert();

        alert.getText().then(function(text) {
            console.log('Alert text is \'' + text + '\'');
        }).then(function() {
            driver.sleep(2000).then(function() {
                alert.accept();
            });
        });
      });

      const input = driver.findElement(By.id('name'));

      driver.sleep(5000).then(function() {
        input.sendKeys('Filling in my form woohoo');
      }).then(function() {
        driver.findElement(By.id('name')).sendKeys(webdriver.Key.TAB);
      }).then(function() {
        var val = input.getText();
        input.getAttribute("value").then(function(value) {
                if(value || val) {
                    console.log('Form input editable');
                }
            });
      });



