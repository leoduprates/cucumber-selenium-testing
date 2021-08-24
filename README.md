![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white)
![Cucumber](https://img.shields.io/badge/Cucumber-%2323D96C.svg?style=for-the-badge&logo=Cucumber&logoColor=white)
![Selenium](https://img.shields.io/badge/Selenium-%2343B02A.svg?style=for-the-badge&logo=selenium&logoColor=white)
![Jenkins](https://img.shields.io/badge/Jenkins-%23D24939.svg?style=for-the-badge&logo=Jenkins&logoColor=white)
<a href="https://linkedin.com/in/leonardo-duprates">
<img alt="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>

# Cucumber Selenium Testing

Behavior driven development (BDD) approach to write automation test scripts to test web applications using Javascript, Selenium and Cucumber.

## Built With

- [@cucumber/cucumber](https://www.npmjs.com/package/@cucumber/cucumber)
- [@cucumber/pretty-formatter](https://www.npmjs.com/package/@cucumber/pretty-formatter)
- [chai](https://www.npmjs.com/package/chai)
- [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver)

## Project Architecture

```shell
cucumber-selenium-testing/
  ├── features
  ├── page_objects
  ├── reports
  ├── step_definitions
  ├── support
```

## Continuous Integration and Delivery

It was used on [Jenkins](https://www.jenkins.io/) to build the CI\CD pipeline.

```shell
┌──────────────────────────────────Test─────────────────────────────────────┐

══════════════⦿══════════════⦿══════════════⦿══════════════⦿══════════════
           Checkout         Build           Test           Report
```

## Getting Started

1\. Install Dependencies

```shell
$ npm install
```

2\. Run Tests

```shell
$ npm test -- -t @tag
```

## Design Patterns

This project uses the design patterns from [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

## Behavior-Driven Development (BDD)

Using declarative ways of writing code allows learning to be fast and cohesive. This helps to organize the tests and more easily understand possible issues. Because of this, [Cucumber.js](https://cucumber.io/docs/installation/javascript/) was chosen to provide among other functionality the structures for the BDD.

## Links

- [Chrome Driver](https://chromedriver.chromium.org/downloads)
- [Cucumber.js](https://cucumber.io/docs/installation/javascript/)
- [Gecko Driver](https://github.com/mozilla/geckodriver/releases)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Opera Chromium Driver](https://github.com/operasoftware/operachromiumdriver)
- [Selenium](https://www.selenium.dev/)
