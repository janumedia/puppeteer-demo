const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto('https://janumedia.com');
    await page.screenshot({path: 'screenshot.png'});

    await browser.close();
})();