const helper = require('./puppeteer-helper');

(async() => {
    const {browser, page} = await helper();
    console.log(await page.title());
    await browser.close();
})();