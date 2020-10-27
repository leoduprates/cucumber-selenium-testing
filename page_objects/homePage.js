const { By } = require('selenium-webdriver')

const home = function() {
    this.queryText = By.id('search_query_top');
    this.searchButton = By.name('submit_search');
}

module.exports = home;