const bug = document.getElementById("bug");
const setBug = setInterval(randomBug, 2000);
let point = document.querySelector("#point");
let life= document.querySelector("#life");
let clickFlag = false;

function getRandomNum(min, max){ return Math.floor(Math.random()*(max-min+1)) + min } 

function randomBug(){
    if (!clickFlag && life.innerHTML > 1){
        life.innerHTML --;
        bug.style.top = getRandomNum(0, 380) + "px";
        bug.style.left = getRandomNum(0, 380) + "px";
        bug.style.visibility = "visible";
        clickFlag = false;
    }
    else if (!clickFlag && life.innerHTML <= 1){
        alert("Game Over");
        clearInterval(setBug);
    }
    else{
        bug.style.top = getRandomNum(0, 380) + "px";
        bug.style.left = getRandomNum(0, 380) + "px";
        bug.style.visibility = "visible";
        clickFlag = false;
    }
}

function clickBug() {
    clickFlag = true;
    bug.style.visibility = "hidden";
    point.innerHTML ++;
}

bug.addEventListener('click', clickBug);

//clearInterval(setBug);