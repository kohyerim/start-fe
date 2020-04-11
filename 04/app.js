var link = document.querySelector('#link');
link.addEventListener('click', function(){
    console.log(11111);
    // event.stopPropagation();
    event.preventDefault();
})


// var list = document.querySelector('#list');
// console.log(list.children);

// var app = document.getElementById('list');

// app.addEventListener('click', function(event){
//     if (event.target.nodeName == 'LI'){
//         console.log('li');
//         event.stopPropagation();
//     };
// })
// // debugger;  // 개발자도구가 켜져있을 때 해당 부분에서 코드가 멈춤
// for(var i=0; i<list.children.length; i++){
//     console.log(list.children[i]);
//     list.children[i].addEventListener('click', function(){
//         console.log(1);
//     })
// }

// var clickCount = 0;
// function popup(){
//     console.log(++clickCount);
//     console.log(arguments, this, event, event.type, event.currentTarget);
// }

// document.body.addEventListener('click',function(){
//     console.log('body');
// });


// console.log(window.outerHeight);

// console.log(window.name);

//window.open('https://www.daum.net');

// var debug = document.getElementById('debug');
// console.log(debug);

// var box = document.querySelector('#debug'); // '#debug':id로 가져오기, '.box':class로 가져오기
// var box2 = document.querySelectorAll('.box');
// console.log(box);
// console.log(box2);


// var div = document.createElement('div');
// // console.log(div)
// div.style.border = '1px solid #000';
// div.innerHTML = 'Hello!';

// document.body.appendChild(div); // 맨 마지막에 들어감(다른 위치도 가능함, 검색해볼 것)

// const span = document.createElement('span');
// const textNode = document.createTextNode('hello!');
// span.appendChild(textNode);
// document.querySelector('#debug').appendChild(span);
// // DOM으로 만들어서 넣은 것은 페이지소스보기에서 보이지 않는다.

// var debug = document.getElementById('debug');
// // debug.remove();
// const list = document.getElementById('list');
// list.removeChild(list.children[0]);

