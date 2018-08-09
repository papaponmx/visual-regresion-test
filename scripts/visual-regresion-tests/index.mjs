import signale from 'signale';
import config from './config';
import getPageScreenshot from './actions/index.mjs';
import compareScreenshots from './actions/compareScreenShots.mjs'

const testImage = 'Production_7_21h_41.png';
const productionImage = 'Test_7_21h_46.png'

const runLocalTest = async (device = 'default', config) => {
  const { env, viewport } = config;
  // await signale.success(`Running production on ${device}`)
  await signale.success(`Running production test on ${device} on a ${config.browser.clientName} viewport`);
  await getPageScreenshot(env.local, 'Test', config.viewport[device]);
  await signale.success('Files are now created');

}

const runProductionTest = async (device = 'default', config) => {
  const { env, viewport } = config;
  // await signale.success(`Running production on ${device}`)
  await signale.success(`Running production test on ${device} on a ${config.browser.clientName} viewport`);
  await getPageScreenshot(env.stagging, 'Production', config.viewport[device]);
  await signale.success('Files are now created');
}


const runItAll = async (config) => {
  // await runLocalTest('mobile', config);
  // await runProductionTest('mobile', config);
  await compareScreenshots(testImage, productionImage, config.viewport.default);
}

runItAll(config)
