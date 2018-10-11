const helper = require('./puppeteer-helper');

(async() => {
    const {browser, page} = await helper();
    await page.screenshot({path: 'screenshot.jpg', type: 'jpeg', quality: 60});
    await browser.close();
})();