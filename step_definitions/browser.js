const { Given } = require('@cucumber/cucumber');

Given(/^I open (.*)$/, function (url) {
    this.driver.get(url);
});