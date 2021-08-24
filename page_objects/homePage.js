const { By } = require("selenium-webdriver");

const home = function() {
    this.queryText = By.id("search_query_top");
    this.searchButton = By.name("submit_search");
    this.womenMenuButton = By.xpath("//a[@title = 'Women']");
    this.dressesMenuButton = By.xpath("//ul[contains(@class, 'sf-menu')]/li/a[@title = 'Dresses']");  
    this.tshirtsMenuButton = By.xpath("//ul[contains(@class, 'sf-menu')]/li/a[@title = 'T-shirts']");
}

module.exports = home;