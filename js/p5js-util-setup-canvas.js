const p5jsSetupCanvas = function (p, pxlWidth, pxlHeight, isWebGL = false) {
  let canvas;

  if (isWebGL) {
    canvas = p.createCanvas(pxlWidth, pxlHeight, p.WEBGL);
  } else {
    canvas = p.createCanvas(pxlWidth, pxlHeight);
  }

  canvas.parent(document.querySelector('.js-helper-p5js-sketch'));
}

export { p5jsSetupCanvas };
