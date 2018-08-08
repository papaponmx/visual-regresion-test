const config = {
  browser: {
    clientName: 'chrome',
  },
  viewport: {
    default: {
      height: 400,
      width: 800
    },
    mobile: {
      height: 400,
      width: 800
    },
    desktop: {
      height: 1200,
      width: 800
    }
  },
  env: {
    local: 'localhost:3000',
    stagging: 'https://visual-regresion-testing.firebaseapp.com/'
  }
}

export default config
