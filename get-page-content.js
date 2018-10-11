const helper = require('./puppeteer-helper');

(async() => {
    const {browser, page} = await helper();
    console.log(await page.content());
    await browser.close();
})();