const signale = require('signale')
const config = require('./config.json')
const { generateDateString }= require('./actions/generateDateString.js');
const { getPageScreenshot } = require('./actions/getPageScreenshot.js');
const { compareScreenshots } = require('./actions/compareScreenShots.js');
const colors = require('colors')

const testImage = 'Production_7_21h41.png'
const productionImage = 'Test_7_21h46.png'

const runLocalTest = async (device = 'default', config) => {
  const { env, viewport } = config
  // await signale.success(`Running production on ${device}`)
  await signale.success(
    `Running production test on ${device} on a ${
      config.browser.clientName
    } viewport`
  )
  await getPageScreenshot(env.local, 'Test', config.viewport[device])
  await signale.success('Files are now created')
}

const runProductionTest = async (device = 'default', config) => {
  const { env, viewport } = config
  // await signale.success(`Running production on ${device}`)
  await signale.success(
    `Running production test on ${device} on a ${
      config.browser.clientName
    } viewport`
  )
  await getPageScreenshot(env.stagging, 'Production', config.viewport[device])
  await signale.success('Files are now created')
}

const runItAll = async (config) => {
  const dateString = generateDateString();
  console.log(`Generating date for ${dateString}`.green);

  await runLocalTest('mobile', config, dateString);
  await runProductionTest('mobile', config, dateString);
  await compareScreenshots(testImage, productionImage, config.viewport.default)
}

runItAll(config);
