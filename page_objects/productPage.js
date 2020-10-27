const { By } = require('selenium-webdriver')

const product = function() {
    this.productLabel = By.xpath(`//ul[contains(@class, 'product_list')]//a[@class = 'product-name']`);
}

module.exports = product;