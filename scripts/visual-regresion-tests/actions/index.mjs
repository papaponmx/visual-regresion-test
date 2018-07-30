import signale from 'signale';

export const initializeBrowser = async(puppeteer, viewport) => {
  const { height, width } = viewport;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({ width, height });

  signale.debug('Opening browser...');

};

export const getPageScreenshot = async (page, url, selector, env) => {
  const d = new Date();
  const dateString = `${d.getDate()}_${d.getHours()}h${d.getMinutes()}`;

  // Go to the website;
  await signale.watch('Navigating to the site');
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
