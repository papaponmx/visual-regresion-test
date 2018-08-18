const signale = require('signale')
const colors = require('colors')
const config = require('./config.json')
const { generateDateString }= require('./actions/generateDateString.js');
const { getPageScreenshot } = require('./actions/getPageScreenshot.js');
const { compareScreenShots } = require('./actions/compareScreenShots.js');

let testImage;
let productionImage;

const runLocalTest = async (device = 'default', config, dateString) => {
  const { env, viewport } = config
  // await signale.success(`Running production on ${device}`)
  await signale.success(
    `Running production test on ${device} on a ${
      config.browser.clientName
    } viewport`
  )
  await getPageScreenshot(env.local, 'Test', config.viewport[device], dateString)
  await signale.success('Files are now created')
}

const runProductionTest = async (device = 'default', config, dateString) => {
  const { env, viewport } = config
  // await signale.success(`Running production on ${device}`)
  await signale.success(
    `Running production test on ${device} on a ${
      config.browser.clientName
    } viewport`
  )
  await getPageScreenshot(env.stagging, 'Production', config.viewport[device], dateString)
  await signale.success('Files are now created')
}

const runItAll = async (config) => {
  const dateString = await generateDateString();
  await console.log(`Generating date for ${dateString}`.green);
  productionImage = await `Production${dateString}`;
  testImage = await `Test${dateString}`;

  await runLocalTest('mobile', config, dateString);
  await runProductionTest('mobile', config, dateString).then(() => {
  compareScreenShots(testImage, productionImage, config.viewport.default)
  });
}

runItAll(config)
  .catch(error => console.log('error'.red, error));
