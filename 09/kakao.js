/* eslint-disable no-alert */
const $btn = document.querySelector('#search-btn');
const $text = document.querySelector('#search-text');
const $result = document.querySelector('#result');
const $more = document.querySelector('#more');
const url = 'https://dapi.kakao.com/v2/search/web';
const headers = { Authorization: 'KakaoAK 2cc871a74c9e1ff6e83791a3703b9aaf' };
let pageNum = 1;

function success(data) {
  const { documents } = data;
  const li = documents.map((doc) => {
    return `<li class="list-group-item"><a href="${doc.url}" target="_blank">${doc.title}</a></li>`;
  });

  $result.innerHTML = `<ul class="list-group list-group-flush">${li.join(
    '',
  )}</ul>`;
  $more.disabled = false;
}

function moreInfo(data) {
  const { documents } = data;
  const li = documents.map((doc) => {
    return `<li class="list-group-item"><a href="${doc.url}" target="_blank">${doc.title}</a></li>`;
  });

  $result.innerHTML += `<ul class="list-group list-group-flush">${li.join(
    '',
  )}</ul>`;
  $more.disabled = false;
}

function error() {
  alert('데이터를 가져올 수 없습니다.');
}

function search() {
  const { value } = $text;
  if ($text.value === '') {
    alert('검색어를 입력하세요');
    return false;
  }
  fetch(`${url}?query=${value}`, { headers })
    .then((res) => res.json())
    .then(success)
    .catch(error);
  return true;
}

function more() {
  pageNum += 1;
  const { value } = $text;
  fetch(`${url}?query=${value}&page=${pageNum}`, { headers })
    .then((res) => res.json())
    .then(moreInfo)
    .catch(error);
  return true;
}

$btn.addEventListener('click', search);
$more.addEventListener('click', more);
