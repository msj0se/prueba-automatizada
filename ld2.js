const { Builder, By, until } = require('selenium-webdriver');
const fs = require('fs');
const path = require('path');

async function takeScreenshot(driver, filename) {
    const screenshot = await driver.takeScreenshot();
    fs.writeFileSync(filename, screenshot, 'base64');
}

async function pruebaDeConfirmacion() {
    const driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://listindiario.com/');
        await driver.wait(until.elementLocated(By.className('c-header__send')), 5000);
        await takeScreenshot(driver, path.join(__dirname, 'Prueba 2', 'paso1.png'));

        try {
            const closeButton = await driver.findElement(By.className('ld-intertitial-close'));
            await closeButton.click();
        } catch (error) {
            console.log('No se encontró el anuncio');
        }

        await driver.sleep(3000);

        const subscribeButton = await driver.findElement(By.className('c-header__send'));
        await subscribeButton.click();
        await takeScreenshot(driver, path.join(__dirname, 'Prueba 2', 'paso2.png'));

        await driver.sleep(3000);

        const handles = await driver.getAllWindowHandles();
        await driver.switchTo().window(handles[1]);

        await driver.sleep(3000);

        const emailInput = await driver.findElement(By.id('inputProp0'));
        await emailInput.sendKeys('correo@ejemplo.com');
        await takeScreenshot(driver, path.join(__dirname, 'Prueba 2', 'paso3.png')); 

        await driver.sleep(3000);

        const submitButton = await driver.findElement(By.id('update-profile-submit-btn'));
        await submitButton.click();
        await takeScreenshot(driver, path.join(__dirname, 'Prueba 2', 'paso4.png')); 
        await driver.sleep(5000);

    } finally {
        await driver.quit();
    }
}

pruebaDeConfirmacion();