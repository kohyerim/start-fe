const url = document.getElementById('url');
const btn = document.getElementById('btn');
const log = document.getElementById('log');

function setLog(res) {
  const textPromise = res.text();
  textPromise.then((data) => {
    log.value = data;
  });
}

function errLog(err) {
  log.value = err;
}

function getUrl() {
  const urlStr = url.value;
  const promise = fetch(urlStr);
  promise
    .then((res) => {
      setLog(res);
    })
    .catch((err) => {
      errLog(err);
    });
}

function enterEvent(keyPress) {
  if (keyPress.keyCode === 13) {
    getUrl();
  }
}

btn.addEventListener('click', getUrl);
url.addEventListener('keypress', enterEvent);
