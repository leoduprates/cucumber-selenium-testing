Feature: Home - Search a product

    Scenario: Search a product
        Given I open http://automationpractice.com/index.php
        When I search the product Blouse
        Then I see the product with title Blouse