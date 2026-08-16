const p5jsSetupCredits = function() {
  const helperP5jsUtils = document.querySelector('.js-helper-p5js-utils');

  const credits = document.createElement('div');

  credits.classList.add('helper-p5js-utils-credits');
  credits.innerHTML = `University of Győr<br>
    Design Campus<br>
    Graphic design MA 1<br>
    Márton Lente, Győr 2026`;

  helperP5jsUtils.appendChild(credits);
}

export { p5jsSetupCredits };
