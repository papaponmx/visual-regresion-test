import signale from 'signale';
import puppeteer from 'puppeteer'
import generateDateString from './generateDateString.mjs'


export const getPageScreenshot = async (url, env, viewportConfig) => {
  const { height, width } = viewportConfig;
  const dateString = generateDateString();
  const selector = 'h1' // This could be any valid CSS Selector

  await signale.success('Initializing browser')

  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.setViewport({ width, height })
  await signale.success('Opening browser...')
  await signale.success('Navigating to the site ');
  await page.goto(url)
        .catch(error => signale.error('Could not reach the site ', url));
  await page.waitForSelector(selector)
    .then(async () => {
      signale.success('Form was submitted successfully'); // This is a fancy console.log()
      await page.screenshot({ path: `./scripts/visual-regresion-tests/images/${env}_${dateString}.png` });
      browser.close();
    })
    .catch(error => signale.error('Selector is not available', url));

};


export const compareScreenShots = async () => {
// TODO: Finish this
};



