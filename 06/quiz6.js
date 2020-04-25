let num = document.querySelector("#num");
let btn = document.querySelector("#btn");
let result = document.querySelector("#result");

function gugudan(number){
    result.innerHTML = "";
    if (number){
        for(var j=1; j<=9; j++){
            let str = `${number} X ${j} = ${number*j}<br>`;
            result.innerHTML += str;
        }
    }
    else{
        alert("숫자가 아닙니다.");
    }
}

btn.addEventListener("click", event => gugudan(num.value));