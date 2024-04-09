const { Builder, By, until } = require('selenium-webdriver');
const fs = require('fs');
const path = require('path');

async function takeScreenshot(driver, filePath) {
    const screenshot = await driver.takeScreenshot();
    fs.writeFileSync(filePath, screenshot, 'base64');
}

async function pruebaDeInicioSesion() {
    const driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://listindiario.com/');
        await driver.wait(until.elementLocated(By.className('c-header__user')), 5000);
        await takeScreenshot(driver, path.join(__dirname, 'Prueba 1', 'paso1.png'));

        await driver.sleep(3000);

        try {
            const closeButton = await driver.findElement(By.className('ld-intertitial-close'));
            await closeButton.click();
        } catch (error) {
            console.log('No se encontró el anuncio');
        }

        await driver.sleep(3000);

        const inicioSesionButton = await driver.findElement(By.className('c-header__user'));
        await inicioSesionButton.click();
        await takeScreenshot(driver, path.join(__dirname, 'Prueba 1', 'paso2.png'));

        await driver.sleep(3000);

        await driver.wait(async () => (await driver.getAllWindowHandles()).length === 2, 5000);

        await driver.sleep(3000);

        const handles = await driver.getAllWindowHandles();
        await driver.switchTo().window(handles[1]);

        const currentUrl = await driver.getCurrentUrl();
        if (currentUrl.includes('constantcontactpages.com')) {
            await driver.sleep(3000);
            await takeScreenshot(driver, path.join(__dirname, 'Prueba 1', 'paso3.png'));

            const firstNameInput = await driver.findElement(By.id('first_name'));
            const lastNameInput = await driver.findElement(By.id('last_name'));
            const emailInput = await driver.findElement(By.id('email_address'));

            await firstNameInput.sendKeys('Antonio');
            await lastNameInput.sendKeys('Melo');
            await emailInput.sendKeys('correo@ejemplo.com');

            await driver.sleep(3000);

            const signUpButton = await driver.findElement(By.css('.button_link[data-trackable="true"]'));
            await signUpButton.click();
            await takeScreenshot(driver, path.join(__dirname, 'Prueba 1', 'paso4.png'));

            await driver.sleep(5000);
        } else {
            console.error('Paso 3: No se abrió la página de inicio de sesión');
        }
    } finally {
        await driver.quit();
    }
}

pruebaDeInicioSesion();
