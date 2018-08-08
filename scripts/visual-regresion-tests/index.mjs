import signale from 'signale';
// const puppeteer = require('puppeteer') // High level API to interact with headless Chrome
// const signale = require('signale')
// import LOCATORS from './locators'; // A JSON with all the CSS locators we need.
import config from './config';
import { getPageScreenshot } from './actions/index.mjs';


const runLocalTest = (params) => {


}

const runProductionTest = async (device = 'default', config) => {
  const { env, viewport } = config;
  // await signale.success(`Running production on ${device}`)
  await signale.success(`Running production test on ${device} on a ${config.browser.clientName} viewport`);
  await getPageScreenshot(env.stagging, 'Production', config.viewport[device]);
  await signale.success('Files are now created');
}

runProductionTest('mobile', config);
// runProductionTest();
// compareImages();
