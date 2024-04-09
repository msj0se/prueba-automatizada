const { Builder, By, until } = require('selenium-webdriver');
const fs = require('fs');
const path = require('path');

async function takeScreenshot(driver, filename) {
    const screenshot = await driver.takeScreenshot();
    fs.writeFileSync(filename, screenshot, 'base64');
}

async function pruebaDeFuncionalidadDelBuscador() {
    const driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://listindiario.com/');
        await takeScreenshot(driver, path.join(__dirname, 'Prueba 4', 'paso1.png'));

        await driver.sleep(3000);

        try {
            const closeButton = await driver.findElement(By.className('ld-intertitial-close'));
            await closeButton.click();
        } catch (error) {
            console.log('No se encontró el anuncio');
        }

        await driver.sleep(3000);

        const searchButton = await driver.wait(until.elementLocated(By.className('c-header__search')), 5000);
        await searchButton.click();
        await takeScreenshot(driver, path.join(__dirname, 'Prueba 4', 'paso2.png'));

        await driver.sleep(3000);

        const searchInput = await driver.wait(until.elementLocated(By.name('query')), 5000);
        await searchInput.sendKeys('Elecciones');
        await takeScreenshot(driver, path.join(__dirname, 'Prueba 4', 'paso3.png'));

        await driver.sleep(3000);

        const inputButton = await driver.wait(until.elementLocated(By.css('button.btn')), 5000);
        await inputButton.click();
        await takeScreenshot(driver, path.join(__dirname, 'Prueba 4', 'paso4.png'));

        await driver.wait(until.elementLocated(By.className('content')), 10000);
        await takeScreenshot(driver, path.join(__dirname, 'Prueba 4', 'paso5.png'));

        const searchResult = await driver.findElement(By.className('item'));
        await searchResult.click();

        await driver.wait(until.elementLocated(By.className('c-detail')), 10000);
        await takeScreenshot(driver, path.join(__dirname, 'Prueba 4', 'paso6.png'));

        await driver.sleep(5000);

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await driver.quit();
    }
}

pruebaDeFuncionalidadDelBuscador();