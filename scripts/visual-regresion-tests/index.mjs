import signale from 'signale';
import config from './config';
import getPageScreenshot from './actions/index.mjs';
import compareScreenshots from './actions/compareScreenShots.mjs'

const testImage = '';
const productionImage = '';

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

runLocalTest('mobile', config);
runProductionTest('mobile', config);
compareImages(testImage, productionImage);
