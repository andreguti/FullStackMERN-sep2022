var ball = document.getElementById("ball");
var ball2 = document.getElementById('ball2');
var velocity = 0;
var positionX = 0;
var reverse = false;
var randomColor1 = randomColor();
var randomColor2 = randomColor();
var randomColor3 = randomColor();
var randomColor4 = randomColor();
var time = 20;

function colorChange(){
    if (reverse) {
        positionX = positionX - velocity;
        ball.style.background = '#' + randomColor1;
        ball2.style.background = '#' + randomColor2;
    } else{
        positionX = positionX + velocity;
        ball.style.background = '#' + randomColor3;
        ball2.style.background = '#' + randomColor4;
        
    }
    if (positionX > xMax || positionX === 0) {
        reverse = !reverse;
        randomColor1 = randomColor();
        randomColor2 = randomColor()
    }
}

function randomColor() {
    return Math.floor(Math.random()*16777215).toString(16);
}
setInterval(colorChange, time);
//setInterval(randomColor, 100);