const path = require('path');
const fs = require('fs-extra');
const { createCanvas } = require('canvas');

const filePath = path.resolve(__dirname, 'photo');

// const can = createCanvas(200, 200, 'svg');
const can = createCanvas(200, 200, 'pdf');
// const can = createCanvas(200, 200);
const ctx = can.getContext('2d');

ctx.fillStyle = 'purple';
ctx.fillRect(0, 0, can.width, can.height);

ctx.textDrawingMode = 'glyph';

ctx.font = '30px Impact';
ctx.fillStyle = 'white';
ctx.rotate(0.1);
ctx.fillText('Awesome!', 50, 100);

// const pngStream = can.createPNGStream();
// const outPngStream = fs.createWriteStream(filePath + '.png');
// pngStream.pipe(outPngStream);
// outPngStream.on('close', () => console.log('PNG done!'));

const pdfStream = can.createPDFStream();
const outPdfStream = fs.createWriteStream(filePath + '.pdf');
pdfStream.pipe(outPdfStream);
outPdfStream.on('close', () => console.log('PDF done!'));

// const jpgStream = can.createJPEGStream({ chromaSubsampling: false });
// const outJpgStream = fs.createWriteStream(filePath + '.jpg');
// jpgStream.pipe(outJpgStream);
// outJpgStream.on('close', () => console.log('JPG done!'));

// fs.writeFile(filePath + '.svg', can.toBuffer()).then(() => console.log('SVG done!'));