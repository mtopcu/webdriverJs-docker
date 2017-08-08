var webdriver = require('selenium-webdriver');

var assert = require('assert');
var By = webdriver.By;
var until = webdriver.until;

var driver = new webdriver.Builder().
usingServer('http://hub:4444/wd/hub').
withCapabilities(webdriver.Capabilities.chrome()).build();
driver.get('http://testpress:80/');

driver.getTitle().then(function(title){
	console.log('The page title is ->',title); });
  
driver.sleep(5000);  

driver.findElement(By.id('logo')).click(); 
  
driver.getTitle().then(function(title){
	console.log('The page title is ->',title); });

driver.sleep(10000);
driver.quit();
