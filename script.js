const steps = [
  'show_front',
  'show_bottom',
  'show_right',
  'show_back',
  'show_top',
  'show_left',
];

let active = 0;

function getNextStepIndex(current) {
  return current === steps.length - 1 ? 0 : current + 1;
}

function getPrevStepIndex(current) {
  return current === 0 ? steps.length - 1 : current - 1;
}

function setActiveBox(prevStep, step) {
  const side = `box_${step.split('_')[1]}`;
  const prevSide = `box_${prevStep.split('_')[1]}`;
  const sideElement = document.getElementsByClassName(side)[0];
  const prevElement = document.getElementsByClassName(prevSide)[0];

  prevElement.classList.remove('active');
  sideElement.classList.add('active');
}

function nextScreen() {
  const boxElement = document.getElementById('box');

  const currentStep = steps[active];
  const nextStepIndex = getNextStepIndex(active);
  const nextStep = steps[nextStepIndex];
  active = nextStepIndex;

  boxElement.classList.replace(currentStep, nextStep);
  setActiveBox(currentStep, nextStep);
}

function previousScreen() {
  const boxElement = document.getElementById('box');

  const currentStep = steps[active];
  const prevStepIndex = getPrevStepIndex(active);
  const prevStep = steps[prevStepIndex];
  active = prevStepIndex;

  boxElement.classList.replace(currentStep, prevStep);
  setActiveBox(currentStep, prevStep);
}

function onKeyDown(event) {
  if (['Space', 'ArrowRight'].includes(event.code)) {
    nextScreen();
    return;
  }

  if (event.code === 'ArrowLeft') {
    previousScreen();
  }
}

window.onload = function() {
  document.addEventListener('keydown', onKeyDown)
}
