/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
const redBtn = document.querySelector('.add-red');
const addBtn = document.querySelector('.add-btn');
const delBtn = document.querySelector('.delete-btn');
const txtBtn = document.querySelector('.text-btn');
const resetBtn = document.querySelector('.reset-btn');
const toggleBtn = document.querySelector('.toggle-btn');
const imgBtn = document.querySelector('.image-btn');

function addRed() {
  const boxes = document.querySelectorAll('.box');
  const boxNum = boxes.length;
  for (let i = 0; i < boxNum; i++) {
    if (!boxes[i].classList.contains('red')) boxes[i].className += ' red';
  }
}

function addBtnFunc() {
  const box = document.createElement('div');
  const pre_box = document.querySelector('.box');
  if (pre_box === null) classList = 'box';
  // eslint-disable-next-line no-undef
  else classList = pre_box.className;
  box.className = classList;
  document.body.appendChild(box);
}

function del() {
  const box = document.querySelectorAll('.box');
  const num = box.length;
  if (num !== 0) document.body.removeChild(box[num - 1]);
}

function addText() {
  const str = document.querySelector('.txt').value;
  const boxes = document.querySelectorAll('.box');
  const boxNum = boxes.length;
  for (let i = 0; i < boxNum; i++) {
    boxes[i].innerHTML += str;
  }
}

function reset() {
  const boxes = document.querySelectorAll('.box');
  const num = boxes.length;
  for (let i = 0; i < num; i++) {
    boxes[i].remove();
  }
}

function toggle() {
  const boxes = document.querySelectorAll('.box');
  const num = boxes.length;
  for (let i = 0; i < num; i++) {
    if (!boxes[i].classList.contains('hidden'))
      boxes[i].classList.add('hidden');
    else boxes[i].classList.remove('hidden');
  }
}

function imgFunc() {
  const url = 'https://i.imgur.com/69NjYBH.png';
  const str = `<img src='${url}' class='img'>`;
  let boxes = document.querySelectorAll('.box');
  if (boxes.length === 0) {
    const box = document.createElement('div');
    box.className = 'box';
    document.body.appendChild(box);
  }
  boxes = document.querySelectorAll('.box');
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML += str;
  }
}

redBtn.addEventListener('click', addRed);
addBtn.addEventListener('click', addBtnFunc);
delBtn.addEventListener('click', del);
txtBtn.addEventListener('click', addText);
resetBtn.addEventListener('click', reset);
toggleBtn.addEventListener('click', toggle);
imgBtn.addEventListener('click', imgFunc);
