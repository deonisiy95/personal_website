const steps = [
  'show-front',
  'show-right',
  'show-back',
  'show-left',
  'show-top',
  'show-bottom',
];

let active = 0;

function getNextStepIndex (current) {
  return current === steps.length - 1 ? 0 : current + 1;
}

function getPrevStepIndex (current) {
  return current === 0 ? steps.length - 1 : current - 1;
}

function nextScreen () {
  const boxElement = document.getElementById('box');

  const currentStep = steps[active];
  const nextStepIndex = getNextStepIndex(active);
  const nextStep = steps[nextStepIndex];
  active = nextStepIndex;

  boxElement.classList.replace(currentStep, nextStep);
}

function previousScreen () {
  const boxElement = document.getElementById('box');

  const currentStep = steps[active];
  const prevStepIndex = getPrevStepIndex(active);
  const prevStep = steps[prevStepIndex];
  active = prevStepIndex;

  boxElement.classList.replace(currentStep, prevStep);
}

function onKeyDown(event) {
  if (event.code === 'ArrowRight') {
    nextScreen();
    return;
  }

  if (event.code === 'ArrowLeft') {
    previousScreen();
  }
}

window.onload = function () {
  document.addEventListener('keydown', onKeyDown)
}
