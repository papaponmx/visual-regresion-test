# Visual Regresion Test

## Why? 
This project contains all the code for the post.

Relevant Links:
* Hosting: Firebase, the build is hosted at: https://visual-regresion-testing.firebaseapp.com/
* Post link: https://dev.to/papaponmx/front-end-development-automation-with-puppeteer-part-3-1hmf-temp-slug-6996658?preview=4813096adacc7a5dc5a8d54a3355106944eb84447e149fac9b5553e77dcabd46c81cddfc0059ae64097d5b3f511592c58a56529404d22bf90be4cf1e

## Run Project in 3 steps
`yarn`
`yarn start`
`yarn vrt`


## Project structure
```
app
├── src
│   └── App.js         # The single component we'll render.
├── scripts
    └── visual-regresion-test
        ├──|actions    # All the DOM traversing functions.
        |  └──getPageScreenshot.js
        |  └──generateDateString.js
        |  └──compareScreenshots.js
        ├── images     # Here we will store our evidence.
        ├── index.js  # The main script were we will run our tests.   
        ├── config.json # For the url, viewport sizes, etc.   

```

## License
This project is licensed under the terms of the [MIT license](https://mit-license.org/).
