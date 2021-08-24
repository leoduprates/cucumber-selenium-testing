const { Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const ProductPage = require('../page_objects/productPage');

const product = new ProductPage();

Then(/^I see the product with title (.*)$/, async function (title) {
    await this.driver.wait(() => this.driver.findElement(product.productLabel));
    const productTitle = await this.driver.findElement(product.productLabel).getText();
    expect(productTitle).to.equal(title);
});