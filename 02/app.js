console.log('app');




// Create
var todos = ['운동'];
var todo = '게임';

todos.push(todo);
console.log(todos);

// Read
todos.forEach(function(todo){
    console.log(todo);
});


// Update

var todos = ['운동', '게임'];
var updateTodo = '게임';
var updateIndex = todos.findIndex(function(todo) {
  return todo === updateTodo;
});
todos[updateIndex] = '공부';
console.log(todos);

// Delete

// var todos = ['운동', '공부', '목욕'];
// var deleteTodo = '공부';
// var deleteIndex = todos.findIndex(function(todo) {
//   return todo === deleteTodo;
// });
// todos.splice(deleteIndex, 1);
// console.log(todos);


// var isMan = false;
// if(isMan){
//     console.log('1');
// }
// else if(!isMan && isHero){

// }
// else {
//     console.log('2');
// }

// window.alert('1'); // 현재위치가 window 이기 때문에 window를 생략할 수 있다.
// alert('안녕하세요');
// alert('1');

// var who = prompt("당신은 누구세요?");
// console.log(who);

// var isDelete = confirm('정말 삭제하시겠습니까?'); // 값이 true, false로 반환
// console.log(isDelete);

// function sum(a, b){
//     //return a + b;
// }
// console.log(sum(1, 2));


// var car = {
//     year: '2014',
//     starting: function(){
//         console.log('starting...');
//     },
// };

// car.starting();

// (function(){    //캡슐화의 효과가 있음
//     var a = ' a';
//     console.log(a);
// })();

function sum(x, y) {
    if (!y) y = 1;
    console.log(x + y);
}
sum(3);
sum(3, 3);

