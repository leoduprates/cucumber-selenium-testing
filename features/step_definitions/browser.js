const { Given } = require('@cucumber/cucumber');

Given(/^I open (.*)$/, async function (url) {
    await this.driver.get(url);
    await this.driver.manage().window().maximize();
});


Given(/^I close the browser$/, async function () {
    await this.driver.close();
});