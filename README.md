# Cypress framework

## About Cypress

Cypress is the developer centric automation framework purely developed in JS. Cypress is developed to overcome the limitations of selenium. Currently cypress is considered as replacement of selecnium, although the architecture of cypress and selenium is differrent. Below are the some of the point which make cypress better over selenium.
- Cypress is faster than selenium as it directly communicates to browser. It runs inside the browser unlike other tools, which runs remotely.
- Good option if you dont know how to build framework. Easy setup. Just need to install .exe.
- helpful to manipulates XHR of browsers
- Parallel testing is inbuilt
- Builtin screenshot and video recording(paid)
- Builtin retry capability.Helpful if test cases are flacky. Waits if element is covered with some other element, senses change event and wait till that transition is done. which makes test cases less flacky.
- recommended of application is stateful
- Automaticaly reloads tests if changes are made
- Inspect DOM in runtime, which makes easier to debug the failure (Using pinned snapshot)
- Can alter DOM in runtime. Can wait untill all service returns specifies status code. Cypress let you do almost everything with your application in runtime.
- Easy debugging as it let you pause and debug using below commands

 ```
 cy.pause()
 ```

 ```
 cy.debug()
 ```

limitations:
 - Language for development is JS only and does not support other languages
 - Supports only chrome. Not recommended if cross browser testing is required.
 
 Below is link which better describes the [difference between selenium and cypress](https://crossbrowsertesting.com/blog/test-automation/selenium-vs-cypress/)
 
 [How cypress works](https://www.cypress.io/how-it-works/)

## How to setup framework

  1. Install node.js

  2. Create a folder with your project name

```
mkdir Cypruss_framework
```

  3. Switch to project directory 

```
cd Cypruss_framework
```

  4. Initiate npm `npm init` and enter all details asked in command line

  5. Download and install cypress 

```
npm install cypress —save-dev
```

  6. Open cypress using any of the below command

```
$(npm bin)/cypress open
```

```
npm run open_cypress
```

```
npx cypress open
```

  7. Connect to cypress dashboard
  To run execute below command

```
cypress run --record --key c3dfdaeb-bc38-46eb-b5a0-ab5749b22fe6
```

## Run cypress in headless mode

To run your tests in headless and record results, add project id in `cypress.json`. Generate key and run your test with below command

```
npx cypress run --record --key <Key>
```
to check results visit below link
https://dashboard.cypress.io/#/projects/<ProjectId>/runs
