const { When } = require('@cucumber/cucumber');
const HomePage = require('../page_objects/homePage');

const home = new HomePage();

When(/^I search the product (.*)$/, async function (value) {
    await this.driver.findElement(home.queryText).sendKeys(value);
    await this.driver.findElement(home.searchButton).click();
});

When(/^I click on (.*) category$/, async function (category) {
    switch (category) {
        case "Women":
            await this.driver.findElement(home.womenMenuButton).click();
            break;
        case "Dresses":
            await this.driver.findElement(home.dressesMenuButton).click();
            break;
        case "T-shirts":
            await this.driver.findElement(home.tshirtsMenuButton).click();
            break;
        default:
            console.log(`${category} not found.`);
            break;
    } 
});