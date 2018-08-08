import signale from 'signale';
import puppeteer from 'puppeteer'

const generateDateString = () => {
  const d = new Date()
  return `${d.getDate()}_${d.getHours()}h${d.getMinutes()}`
}

const initializeBrowser = async(viewport) => {
  const { height, width } = viewport;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({ width, height });

  await signale.success('Opening browser...')
  return page = page;
};

export const getPageScreenshot = async (url, env, viewportConfig) => {
  let page;
  const dateString = generateDateString();
  const selector = 'h1' // This could be any valid CSS Selector

  await signale.success('Initializing browser')
  await initializeBrowser(viewportConfig);

  // Go to the website;
  await signale.watch('Navigating to the site ');

  await page.goto(url);

  await page.waitForSelector(selector)
    .then(async () => {
      signale.success('Form was submitted successfully'); // This is a fancy console.log()
      await page.screenshot({ path: `${env}_${dateString}.png` });
      browser.close();
    })
};


export const compareScreenShots = async () => {
// TODO: Finish this
};



