var webdriver = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
var assert = require('assert');
var By = webdriver.By;
var until = webdriver.until;

var driver = new webdriver.Builder().
usingServer('http://hub:4444/wd/hub').
withCapabilities(webdriver.Capabilities.chrome()).build();
driver.get('http://testpress:80/wp-admin');
driver.findElement(By.id('language-continue')).click();

driver.sleep(15000);
driver.quit();
