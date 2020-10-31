const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

const HomePage = require('../page_objects/homePage');
const ProductPage = require('../page_objects/productPage');

const home = new HomePage();
const product = new ProductPage();

When(/^I search the product (.*)$/, async function (value) {
    await this.driver.findElement(home.queryText).sendKeys(value);
    await this.driver.findElement(home.searchButton).click();
});

Then(/^I see the product with title (.*)$/, async function (title) {
    await this.driver.wait(this.driver.findElement(product.productLabel));
    const productTitle = await this.driver.findElement(product.productLabel).getText();
    expect(productTitle).to.equal(title);
});