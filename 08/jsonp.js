// eslint-disable-next-line no-undef
// callback({
//   a: 1,
// });

// console.log('jsonp.js');

var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.src =
  'http://api.facebook.com/method/links.getStats?format=json&urls=http://daum.net&callback=complate';
head.appendChild(script);
