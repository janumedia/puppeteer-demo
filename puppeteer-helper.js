const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

const defaultOptions = {
    headless: true, 
    pageURL: 'http://vue-web-components.netlify.com',
    waitUntil: 'networkidle0'
};

module.exports = async function(options) {
    const {headless, pageURL, waitUntil, deviceName} = options || defaultOptions;
    const browser = await puppeteer.launch({headless: headless || defaultOptions.headless});
    const page = await browser.newPage();
    if(deviceName) await page.emulate(devices[deviceName]);
    await page.goto(pageURL || defaultOptions.pageURL, {waitUntil: waitUntil || defaultOptions.waitUntil });
    return {
        browser,
        page
    }
}