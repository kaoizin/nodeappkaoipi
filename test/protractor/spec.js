describe('Protractor Demo App', function() {

	it('soma', function() {
        browser.driver.get('http://localhost:3000/calculadora');
		browser.driver.findElement(by.id('tabSoma')).click();
        browser.driver.findElement(by.id('num1')).sendKeys(2);
		browser.driver.findElement(by.id('num2')).sendKeys(2);
        browser.driver.findElement(by.id('buttonSoma')).click();

        expect(browser.driver.findElement(by.id('result')).getText()).toEqual('4');
    });
	it('sub', function() {
        browser.driver.get('http://localhost:3000/calculadora');
		browser.driver.findElement(by.id('tabSub')).click();
        browser.driver.findElement(by.id('num3')).sendKeys(4);
		browser.driver.findElement(by.id('num4')).sendKeys(2);
        browser.driver.findElement(by.id('buttonSub')).click();

        expect(browser.driver.findElement(by.id('result')).getText()).toEqual('2');
    });
	it('mult', function() {
        browser.driver.get('http://localhost:3000/calculadora');
		browser.driver.findElement(by.id('tabMult')).click();
        browser.driver.findElement(by.id('num5')).sendKeys(4);
		browser.driver.findElement(by.id('num6')).sendKeys(2);
        browser.driver.findElement(by.id('buttonMult')).click();

        expect(browser.driver.findElement(by.id('result')).getText()).toEqual('8');
    });
	it('div', function() {
        browser.driver.get('http://localhost:3000/calculadora');
		browser.driver.findElement(by.id('tabDiv')).click();
        browser.driver.findElement(by.id('div0')).sendKeys(6);
		browser.driver.findElement(by.id('num7')).sendKeys(2);
        browser.driver.findElement(by.id('buttonDiv')).click();

        expect(browser.driver.findElement(by.id('result')).getText()).toEqual('3');
    });
	it('raiz', function() {
        browser.driver.get('http://localhost:3000/calculadora');
		browser.driver.findElement(by.id('tabRaiz')).click();
		browser.driver.findElement(by.id('num8')).sendKeys(9);
        browser.driver.findElement(by.id('buttonRaiz')).click();

        expect(browser.driver.findElement(by.id('result')).getText()).toEqual('3');
    });
	it('pow', function() {
        browser.driver.get('http://localhost:3000/calculadora');
		browser.driver.findElement(by.id('tabPow')).click();
        browser.driver.findElement(by.id('num9')).sendKeys(2);
		browser.driver.findElement(by.id('num10')).sendKeys(3);
        browser.driver.findElement(by.id('buttonPow')).click();

        expect(browser.driver.findElement(by.id('result')).getText()).toEqual('8');
    });
	
	
});