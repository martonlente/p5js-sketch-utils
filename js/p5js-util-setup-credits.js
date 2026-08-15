const p5jsSetupCredits = function() {
  const helperP5jsUtils = document.querySelector('.js-helper-p5js-utils');

  const credits = document.createElement('div');

  credits.classList.add('helper-p5js-utils-credits');
  credits.innerHTML = 'Széchenyi István Egyetem<br> Művészeti Kar Design Campus<br> Tervezőgrafika MA 1<br> Lente Márton, Győr 2026';

  helperP5jsUtils.appendChild(credits);
}

export { p5jsSetupCredits };
