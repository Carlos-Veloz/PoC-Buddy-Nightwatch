# PoC-Buddy-Nightwatch
This project was created as a pilot for the buddy on boarding program related to Software QA Engineer. The automation framework involves technologies as Nightwatch, BrowserStack, Eslint, HTML reporter to be displayed once a build is executed on Jenkins, and Slack reporter to have a quick overview of the Passed/Failed test cases
## Goals
* Implement Page Object Model
* Use CSS Selector (default by Nightwatch)
* Configure Jenkins to build on demand
* Set up Slack notifications one a new build is done
* Implement BrowserStack for cross platform/browser testing
* Use Eslint for static analysis and ensure code is made consistently avoiding bugs
## Getting started
You need to have the following tools installed on your computer.
Node.js v12.10.0 or higher, npm v6.11.3 or higher. To install both tools you can download them from the [Node.js website](https://nodejs.org/en/)
### Instalation
Clone this repository in your local machine. Install packaged dependencies by running
```
npm install
```
## Running the tests
Once you have the environment set up, you can run the tests by running the following commands.
To run tests on your local
```
npm run e2e:local
```
To connect to browserStack and run the tests on safari
```
npm run e2e:BS:safari
```
To connect to browserStack and run the tests in multiple browsers (e.g. chrome, safari, firefox, and edge)
```
npm run e2e:BS:parllell 
```
## Report on Slack
In order to see the summary of your test execution you need to be added to the Slack channel *poc_buddy_nightwatch* or to check more information about how to set up Slack webhook notification please refer to this [tutorial](https://kb.itglue.com/hc/en-us/articles/228469048-Setting-up-Slack-webhook-notifications)
