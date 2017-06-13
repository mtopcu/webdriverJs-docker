var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
usingServer('http://hub:4444/wd/hub').
withCapabilities(webdriver.Capabilities.chrome()).build();

driver.get('http://testpress:80');

driver.getTitle().then(function(title){
	console.log(title);
});

driver.findElement(By.id('language-continue')).click();

driver.wait(until.elementLocated(By.id('weblog_title')), 10000);
driver.findElement(By.id('weblog_title')).sendkeys('Test');
driver.findElement(By.id('user_login')).sendkeys('mtopcu');

driver.findElement(By.id('admin_email')).sendkeys('mtopcu@test.com');

driver.findElement(By.id('submit')).click();


driver.sleep(10000);
driver.quit();
