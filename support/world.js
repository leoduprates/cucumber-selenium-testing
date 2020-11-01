const { setWorldConstructor, setDefaultTimeout } = require('@cucumber/cucumber');
const webdriver = require('selenium-webdriver');

function CustomWorld() {
    var chromeCapabilities = webdriver.Capabilities.chrome();
    var chromeOptions = {
        args: ['--disable-gpu',
            '--no-sandbox',
            '--disable-extensions']
    };
    chromeCapabilities.set('chromeOptions', chromeOptions);

    this.driver = new webdriver.Builder()
        .usingServer('http://selenium-hub:4444/wd/hub')
        .withCapabilities(chromeCapabilities)
        .build();

    this.driver.manage().setTimeouts({
        implicit: 60000,
        pageLoad: 60000,
        script: 60000
    });

}

setWorldConstructor(CustomWorld);
setDefaultTimeout(60 * 1000);
