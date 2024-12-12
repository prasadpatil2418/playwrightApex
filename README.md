# Apex tools e2e tests
 
Regression tests for the apex tools app, built using the Playwright framework.
 
## Running tests locally
 
This is useful for debugging and developing tests. It also enables you to see the tests running directly in a Browser.
 
Ensure you have nvm installed, if not following instructions here: https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating
 
Install and switch to using the correct version of node. 
```shell
nvm install 20.11.1
nvm use 20.11.1
```
 
Confirm version of node being used:
```shell
node -v
```
 
Install playwright locally:
```shell
npx playwright install
```
 
Create a .env file in the root folder, and update the credentials:
```shell
    AUTH_URL: ''
```
 
Update the .env file with the correct credentials and values for the environment you are going to run the tests against.
 
You should now be able to run the tests locally and make use of IDE plugins eg:
 
* VS Code extension [`ms-playwright.playwright`](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
* JetBrains PHPStorm: https://www.jetbrains.com/help/phpstorm/playwright.html
 
* See full documentation at https://playwright.dev/docs
 
## Further reading
 
* https://playwright.dev/docs/ci-intro
* https://playwright.dev/docs/test-cli
* https://playwright.dev/docs/test-snapshots
* https://github.com/debs-obrien/playwright/tree/main/examples
* https://github.com/motdotla/dotenv
* https://github.com/dotenvx/dotenvx

 