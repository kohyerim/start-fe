/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */
const box = document.getElementById('box');
let pre_X = null;
let pre_Y = null;

function mouseDown(event) {
  pre_X = event.clientX;
  pre_Y = event.clientY;
  window.addEventListener('mousemove', mouseMove);
}

function mouseMove(event) {
  const moveTo_X = event.clientX - pre_X;
  const moveTo_Y = event.clientY - pre_Y;
  box.style.top = `${box.offsetTop + moveTo_Y}px`;
  box.style.left = `${box.offsetLeft + moveTo_X}px`;
  pre_X = event.clientX;
  pre_Y = event.clientY;
}

function mouseUp() {
  window.removeEventListener('mousemove', mouseMove);
}

box.addEventListener('mousedown', mouseDown);
box.addEventListener('mouseup', mouseUp);
