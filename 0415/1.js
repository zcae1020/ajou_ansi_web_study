let s = document.getElementById("square");
let angle = 0;

function rotate(){
    s.style.transform=`rotate(${angle}deg)`
    angle+=50;
}

setInterval(rotate, 100)