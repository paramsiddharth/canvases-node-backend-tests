const fs = require('fs-extra');
const path = require('path');
const fabric = require('fabric').fabric;
const { createCanvas, loadImage } = require('canvas');

const filePath = path.resolve(__dirname, 'photo');

// const jsDomUtils = require('jsdom/lib/jsdom/living/generated/utils');
// const pdfCanvas = createCanvas(200, 200, 'pdf');
// const el = fabric.document.createElement('canvas');

const can = new fabric.StaticCanvas(null, {
	height: 200,
	width: 200
});

const rect = new fabric.Rect({
	top : 100,
	left : 100,
	width : 60,
	height : 70,
	fill : 'red'
});

const text = new fabric.Text('Hello!', {
	fontFamily: 'Impact',
	fontSize: 10,
	left: 0.8 * can.getWidth() / 2,
	top: 0.8 * can.getHeight() / 2
});

can.add(rect);
can.add(text);

// console.log(can.toDataURL());

can.renderAll();

const out = fs.createWriteStream(filePath + '.png');
const stream = can.createPNGStream();
stream.pipe(out);
out.on('close', () => console.log('PNG saved!'));

// const pdfOut = fs.createWriteStream(filePath + '.pdf');
// const pdfStream = fabric.util.getNodeCanvas(can.lowerCanvasEl).createPDFStream();
// pdfStream.pipe(pdfOut);
// pdfOut.on('close', () => console.log('PDF saved!'));

// const el = fabric.util.getNodeCanvas(can.toCanvasElement());
// const pdfOut = fs.createWriteStream(filePath + '.pdf');
// const pdfStream = el.createPDFStream();
// pdfStream.pipe(pdfOut);
// pdfOut.on('close', () => console.log('PDF saved!'));

// const ctxFab = can.getContext('2d');
const pdfCanvas = createCanvas(200, 200, 'pdf');
const ctx = pdfCanvas.getContext('2d');

// ctx.putImageData(
// 	ctxFab.getImageData(0, 0, ctxFab.canvas.width, ctxFab.canvas.height),
// 0, 0);

loadImage(can.toDataURL()).then(img => {
	ctx.drawImage(img, 0, 0);

	const pdfOut = fs.createWriteStream(filePath + '.pdf');
	const pdfStream = pdfCanvas.createPDFStream();
	pdfStream.pipe(pdfOut);
	pdfOut.on('close', () => console.log('PDF saved!'));
});