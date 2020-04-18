
var redBtn = document.querySelector(".add-red");
var addBtn = document.querySelector(".add-btn");
var delBtn = document.querySelector(".delete-btn");
var txtBtn = document.querySelector(".text-btn");
var resetBtn = document.querySelector(".reset-btn");
var toggleBtn = document.querySelector(".toggle-btn");
var imgBtn = document.querySelector(".image-btn");

function addRed(){
    var boxes = document.querySelectorAll(".box");
    var boxNum = boxes.length;
    for (var i=0; i<boxNum; i++){
        if (!boxes[i].classList.contains("red")) boxes[i].className += ' red';
    }
}

function addBtnFunc(){
    var box = document.createElement("div");
    var pre_box = document.querySelector(".box");
    if (pre_box === null) classList = "box";
    else classList = pre_box.className;
    box.className = classList;
    document.body.appendChild(box);
}

function del(){
    var box = document.querySelectorAll(".box");
    var num = box.length;
    if(num !== 0) document.body.removeChild(box[num-1]);
}

function addText(){
    var str = document.querySelector(".txt").value;
    var boxes = document.querySelectorAll(".box");
    var boxNum = boxes.length;
    for (var i=0; i<boxNum; i++){
        boxes[i].innerHTML += str;
    }
}

function reset(){
    var boxes = document.querySelectorAll(".box");
    var num = boxes.length;
    for(var i=0; i<num; i++){
        boxes[i].remove();
    }
}

function toggle(){
    var boxes = document.querySelectorAll(".box");
    var num = boxes.length;
    for(var i=0; i<num; i++){
        if (!boxes[i].classList.contains('hidden')) boxes[i].classList.add('hidden');
        else boxes[i].classList.remove('hidden');
    }
}

function imgFunc(){
    var url = "https://i.imgur.com/69NjYBH.png";
    var str = "<img src='" + url + "' class='img'>";
    var boxes = document.querySelectorAll(".box");
    if (boxes.length === 0) {
        var box = document.createElement("div");
        box.className = "box";
        document.body.appendChild(box);
    }
    boxes = document.querySelectorAll(".box");
    for (var i=0; i<boxes.length; i++){
        boxes[i].innerHTML += str;
    }
}

redBtn.addEventListener('click', addRed);
addBtn.addEventListener('click', addBtnFunc);
delBtn.addEventListener('click', del);
txtBtn.addEventListener('click', addText);
resetBtn.addEventListener('click', reset);
toggleBtn.addEventListener('click', toggle);
imgBtn.addEventListener('click', imgFunc);