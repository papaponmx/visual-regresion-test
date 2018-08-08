import signale from 'signale';
import puppeteer from 'puppeteer'

const generateDateString = () => {
  const d = new Date()
  return `${d.getDate()}_${d.getHours()}h${d.getMinutes()}`
}

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
  await page.goto(url);
  await page.waitForSelector(selector)
    .then(async () => {
      signale.success('Form was submitted successfully'); // This is a fancy console.log()
      await page.screenshot({ path: `./scripts/visual-regresion-tests/images/${env}_${dateString}.png` });
      browser.close();
    })
};


export const compareScreenShots = async () => {
// TODO: Finish this
};



