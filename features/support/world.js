const { setWorldConstructor, setDefaultTimeout } = require('@cucumber/cucumber');
const { browser } = require('../../core/browsers')

function CustomWorld() {

    console.log(process.env.BROWSER);
    console.log(process.env.SERVER);

    this.driver = new browser();

    this.driver.manage().window().maximize();

    this.driver.manage().setTimeouts({
        implicit: 60000,
        pageLoad: 60000,
        script: 60000
    });
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(60 * 1000);