const helper = require('./puppeteer-helper');

(async() => {
    const {browser, page} = await helper();
    //1st solutions using page.evaluate
    /*
    const result = await page.evaluate(() => {
        return [...document.querySelectorAll('img')].map(el => {
            return el.getAttribute('src');
        })
    })
    */
    
    //2nd solutions using page.$$eval
    const result = await page.$$eval('img', hrefs => hrefs.map(a => a.getAttribute('src')));
    
    console.log(result);

    await browser.close();
})();