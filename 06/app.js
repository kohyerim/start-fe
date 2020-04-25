// let a =  " aa";
// const b = "bb"; // const : 새로운 값 덮어쓰기 불가능 > const 사용을 권장함
// var c = "11";
// c = 33;
// b = 22;
// console.log(a, b, c);

// var str = 'aaaaa \
// adfsadfsd'; // 줄 띄어쓰기 하는 법

// const s = `aaaaaa
// aaaaaa
// ccc
// dddddd`;    // 백쿼트 사용하면 역슬래시 필요 x
// console.log(str, s);

// function sum(x,y=1){ // y=1: 값을 안받으면 y는 1
//     return x + y;
// }

// console.log(sum(1));

// const arr = [1, 2, 3];
// const newArr = arr.map(item => item + 1 );

// console.log(newArr);

document.getElementById('box').addEventListener('click', event => console.log(1));

function sum(x, y , z){
    return x + y + z;
}

const numbers = [1,2 ,3];
console.log(sum(...numbers));
console.log(sum(1, 2, 3)); // 같은 내용

