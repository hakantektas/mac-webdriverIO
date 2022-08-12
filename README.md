
# WebdriverIO Mobile Automation

Using Mocha Framework and chai asserion library, writing and running mobile automation and creating test reports with allure report.


## Tests


Run the following command to run the tests

```bash
  npm run test
```

  
## Run it on your computer

Clone the project

```bash
  git clone https://github.com/hakantektas/mac-webdriverIO.git
```

Go to the project directory

```bash
  cd my-project
```

Install required packages

```bash
  npm install
  
  npm install @wdio/appium-service --save-dev
  
  npm install @wdio/cli
```

npm install @wdio/appium-service --save-dev

Run the server

```bash
  npm run start
```

  
## Appendices

Do not forget to edit the device udid and device name information in the Capabilities in the wdio.config file according to its own device / emulator.
## SETUP

mkdir [fileName]

cd [filepath]                                                                    


npm init -y   

npm install webdriverio  

npm install @wdio/cli          

npx wdio config   

npm install @wdio/allure-reporter --save-dev                                           

npm i allure-commandline   


Reference >> https://webdriver.io/docs/appium-service 
