import fs from 'fs';
import PNG from 'pngjs'
import pixelmatch from 'pixelmatch'

 const compareScreenShots =  (imgA, imgB) => {
  // TODO: Finish this, note that you need 2 images as params
   const img1 = fs.createReadStream('img1.png').pipe(new PNG()).on('parsed', doneReading),
     img2 = fs.createReadStream('img2.png').pipe(new PNG()).on('parsed', doneReading),
     filesRead = 0;

   const doneReading() {
     if (++filesRead < 2) return;
     const diff = new PNG({ width: img1.width, height: img1.height });

     pixelmatch(img1.data, img2.data, diff.data, img1.width, img1.height, { threshold: 0.1 });

     diff.pack().pipe(fs.createWriteStream('diff.png'));
   }

};


export default compareScreenShots;


