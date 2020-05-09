/* eslint-disable no-alert */
/* eslint-disable no-plusplus */
const num = document.querySelector('#num');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');

function gugudan(number) {
  result.innerHTML = '';
  if (number) {
    for (let j = 1; j <= 9; j++) {
      const str = `${number} X ${j} = ${number * j}<br>`;
      result.innerHTML += str;
    }
  } else {
    alert('숫자가 아닙니다.');
  }
}

btn.addEventListener('click', () => gugudan(num.value));
