const { createCanvas } = require('canvas');
const download = require('downloadjs');

const can = createCanvas(200, 200);
// const can = createCanvas(200, 200);
const ctx = can.getContext('2d');

ctx.fillStyle = 'purple';
ctx.fillRect(0, 0, can.width, can.height);

ctx.textDrawingMode = 'glyph';

ctx.font = '30px Impact';
ctx.fillStyle = 'white';
ctx.rotate(0.1);
ctx.fillText('Awesome!', 50, 100);

window.can = can;

download(can.toDataURL(), 'certificate.png', 'image/png');