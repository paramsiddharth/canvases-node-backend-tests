const fs = require('fs-extra');
const path = require('path');
const fabric = require('fabric').fabric;

const filePath = path.resolve(__dirname, 'photo');

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

can.add(rect);

// console.log(can.toDataURL());

can.renderAll();

const out = fs.createWriteStream(filePath + '.png');
const stream = can.createPNGStream();

stream.pipe(out);

out.on('close', () => console.log('PNG saved!'));