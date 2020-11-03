@home @women @category @regression
Feature: Home - Women Category

    Scenario: Women Category
        Given I open http://automationpractice.com/index.php
        When I click on Women category
        Then I see the product with title Faded Short Sleeve T-shirts
        And I close the browser