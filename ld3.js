const { Builder, By, until } = require('selenium-webdriver');
const fs = require('fs');
const path = require('path');

async function takeScreenshot(driver, filename) {
    const screenshot = await driver.takeScreenshot();
    fs.writeFileSync(filename, screenshot, 'base64');
}

async function pruebaDeFuncionalidadDeEnlacesEnTitulares() {
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://listindiario.com/');
        await takeScreenshot(driver, path.join(__dirname, 'Prueba 3', 'paso1.png'));

        try {
            const closeButton = await driver.findElement(By.className('ld-intertitial-close'));
            await closeButton.click();
        } catch (error) {
            console.log('No se encontró el anuncio');
        }

        await driver.sleep(3000);

        await driver.wait(until.elementLocated(By.className('home-boards')), 10000);
        await takeScreenshot(driver, path.join(__dirname, 'Prueba 3', 'paso2.png'));

        await driver.sleep(3000);

        const titular = await driver.findElement(By.className('c-article__title'));
        await titular.click();
        await takeScreenshot(driver, path.join(__dirname, 'Prueba 3', 'paso3.png'));

        await driver.sleep(4000);

    } catch (error) {
        console.error('Error en la prueba de funcionalidad de enlaces en titulares:', error);
    } finally {
        await driver.quit();
    }
}

pruebaDeFuncionalidadDeEnlacesEnTitulares();