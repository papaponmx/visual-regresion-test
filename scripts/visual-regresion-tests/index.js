const signale = require('signale')
// const config = require('./config')
const getPageScreenshot = require('./actions/index.js')
const compareScreenshots = require('./actions/compareScreenShots.js')

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

const runItAll = async (config = config) => {
  await console.log(JSON.stringify(config.viewport.default, null, 2))
  // await runLocalTest('mobile', config);
  // await runProductionTest('mobile', config);
  await compareScreenshots(testImage, productionImage, config.viewport.default)
}

// FIXME: Something is wrong with your imports

runItAll(config)
