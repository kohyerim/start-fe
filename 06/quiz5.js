const boxes = document.querySelectorAll(".box");
let box = null;
let pre_X = null;
let pre_Y = null;


function mouseDown(event){
    pre_X = event.clientX;
    pre_Y = event.clientY;
    box = this;
    window.addEventListener('mousemove', mouseMove);
}

function mouseMove(event){
    var moveTo_X = event.clientX - pre_X;
    var moveTo_Y = event.clientY - pre_Y;
    box.style.top = box.offsetTop + moveTo_Y + "px";
    box.style.left = box.offsetLeft + moveTo_X + "px";
    pre_X = event.clientX;
    pre_Y = event.clientY;
}

function mouseUp(){
    window.removeEventListener('mousemove', mouseMove);
    box = null;
}

for (var i=0; i<boxes.length; i++){
    boxes[i].addEventListener('mousedown', mouseDown);
    boxes[i].addEventListener('mouseup', mouseUp);
}
