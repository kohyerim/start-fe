console.log('app.js');

var name = '고혜림';
var Name = '고혜림';  // 두개가 다른 변수


console.log(name);
console.log(Name);

/*
 console.log(1);
// console.log(2);
*/

var isMan = true;
console.log(isMan);
var isMan = 'true'; // js에서는 if문에서 자동으로 boolean으로 취급
console.log(isMan);


function log(str){
    console.log(str);
}
/*
var log = function(str){
    console.log(str);
}
*/


log("hello");


var image = {
    width : 100,
    height : 100,
    name : '1.png',

};

console.log(image);


var image1 = [1,2,3,4,5,6,'a',{}];
image1[0] = 'a';

console.log(image1);

var data = null; // 값 없음
var data1 = ''; // 빈 값
var data2; // 정의되지 않음 

console.log(data, data1, data2);

console.log(1 + 2);
console.log('1'+'2');
console.log(1 + '2'); // 다른 데이터타입을 붙이는 것은 지양해야 함.

// ==, != 비 권장 (단순 값들만 비교하는 것)
// ===, !== (데이터 타입까지 비교하여 일치 불일치 판정)
console.log(1 == 1); // true
console.log(1 == '1');  // true
console.log(1 === '1');  // false

console.log('' == 0); // true 가 출력되는 이유는 ''과 0 둘 다 false 값을 반환하기 때문

var isHero = true;
if(isHero){
    console.log('hero');
}

console.log(typeof 1);
console.log(typeof {});

