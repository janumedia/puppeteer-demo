const helper = require('./puppeteer-helper');

(async() => {
    const {browser, page} = await helper({deviceName:'iPad'});
    await page.screenshot({path: 'screenshot-fullpage.jpg', type: 'jpeg', quality: 60, fullPage: true});
    await browser.close();
})();