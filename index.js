const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

(async() => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.emulate(devices['iPad']);
    await page.goto('http://profile.janumedia.com/portfolio', {waitUntil: 'networkidle0'});
    await page.screenshot({path: 'screenshot.jpg', type: 'jpeg', quality: 60,fullPage: true});
    await browser.close();
})();