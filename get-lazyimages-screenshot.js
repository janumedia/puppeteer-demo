const helper = require('./puppeteer-helper');

(async() => {
    const {browser, page} = await helper({deviceName:'iPhone 6'});
    
    const pageHeight = await page.evaluate(() => {
        const body = document.body;
        const html = document.documentElement;
        return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    });

    const viewportHeight = page.viewport().height;

    let screenHeight = 0;
    while(screenHeight < pageHeight) {
        await page.evaluate(vh => {
            window.scrollBy(0, vh);
        }, viewportHeight);
        //give delay for load lazy image
        await page.waitFor(10);
        screenHeight += viewportHeight;
    }

    //give delay to complete images loaded
    await page.waitFor(2000);

    await page.screenshot({path: 'screenshot-lazyimages.jpg', type: 'jpeg', quality: 60, fullPage: true});
    
    await browser.close();
})();