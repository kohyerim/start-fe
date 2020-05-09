const btn = document.getElementById('btn');
let setTime = null;
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + Number(min);
}

function numAnimation(result) {
  const tmp = Number(document.getElementById('box').innerHTML);
  if (tmp < (result * 9) / 10) {
    if (Math.floor(result / 10) !== 0) {
      document.getElementById('box').innerHTML = tmp + Math.floor(result / 10);
    } else {
      document.getElementById('box').innerHTML = tmp + 1;
    }
  } else {
    btn.disabled = false;
    clearInterval(setTime);
  }
}

function btnFunc() {
  const min = document.getElementById('min').value;
  const max = document.getElementById('max').value;
  const result = getRandomNum(min, max);
  document.getElementById('box').innerHTML = Math.floor(result / 7);
  btn.disabled = true;
  setTime = setInterval(() => numAnimation(result), 70);
}

btn.addEventListener('click', btnFunc);
