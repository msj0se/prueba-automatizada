const { Builder, By, until } = require('selenium-webdriver');
const fs = require('fs');
const path = require('path');

async function takeScreenshot(driver, filename) {
    const screenshot = await driver.takeScreenshot();
    fs.writeFileSync(filename, screenshot, 'base64');
}

async function pruebaDeExistenciaYFuncionalidadDelMenuDeClasificaciones() {
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://listindiario.com/');
        await takeScreenshot(driver, path.join(__dirname, 'Prueba 5', 'paso1.png'));

        await driver.sleep(2000);

        try {
            const closeButton = await driver.findElement(By.className('ld-intertitial-close'));
            await closeButton.click();
        } catch (error) {
            console.log('No se encontró el anuncio');
        }

        await driver.sleep(2000);

        const menuButton = await driver.findElement(By.className('c-header__btn'));
        if (await menuButton.isDisplayed()) {
            console.log('Se encontró el botón de menú de clasificaciones.');
        } else {
            console.log('No se encontró el botón de menú de clasificaciones.');
        }

        await driver.sleep(2000);

        await menuButton.click();
        await takeScreenshot(driver, path.join(__dirname, 'Prueba 5', 'paso2.png'));

        await driver.wait(until.elementLocated(By.className('c-nav-hamburger')), 5000);
        await driver.sleep(2000);

        const musicaMenuItem = await driver.findElement(By.id("m21311-21310-21312"));
        await musicaMenuItem.click();
        await takeScreenshot(driver, path.join(__dirname, 'Prueba 5', 'paso3.png'));

        await driver.sleep(3000);

        try {
            const closeButton = await driver.findElement(By.className('ld-intertitial-close'));
            await closeButton.click();
        } catch (error) {
            console.log('No se encontró el anuncio');
        }

        await driver.wait(until.elementLocated(By.className('content')), 10000);
        await takeScreenshot(driver, path.join(__dirname, 'Prueba 5', 'paso4.png'));

        const searchResult = await driver.findElement(By.className('item'));
        await searchResult.click();

        await driver.wait(until.elementLocated(By.className('c-detail')), 10000);
        await takeScreenshot(driver, path.join(__dirname, 'Prueba 5', 'paso5.png'));

        await driver.sleep(5000);

    } catch (error) {
        console.error('Error en la prueba de funcionalidad del menú de clasificaciones:', error);
    } finally {
        await driver.quit();
    }
}

pruebaDeExistenciaYFuncionalidadDelMenuDeClasificaciones();