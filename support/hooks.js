const { setWorldConstructor, setDefaultTimeout } = require('@cucumber/cucumber');
const webdriver = require('selenium-webdriver');

function CustomWorld() {
    var chromeCapabilities = webdriver.Capabilities.chrome();
    var chromeOptions = {
        args: [ '--disable-gpu',
                '--no-sandbox',
                '--disable-extensions']
    };
    chromeCapabilities.set('chromeOptions', chromeOptions);

    this.driver = new webdriver.Builder()
        .withCapabilities(chromeCapabilities)
        .usingServer('http://172.18.0.3:4444/wd/hub')
        .build();

    this.driver.manage().setTimeouts({
        implicit: 60000,
        pageLoad: 60000,
        script: 60000
    });

    this.driver.manage().window().maximize();
}

setDefaultTimeout(60 * 1000);
setWorldConstructor(CustomWorld);