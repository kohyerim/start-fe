var box = document.getElementById("box");
var pre_X = null;
var pre_Y = null;


function mouseDown(event){
    pre_X = event.clientX;
    pre_Y = event.clientY;
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
}


box.addEventListener('mousedown', mouseDown);
box.addEventListener('mouseup', mouseUp);