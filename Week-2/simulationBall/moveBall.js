var velocity = 0;
var positionX = 0;
var ball = document.getElementById('ball');
var ball2 = document.getElementById('ball2');
var reverse = false;
var time = 20;
function moveBall() {
    if (reverse) {
        positionX = positionX - velocity;
        ball.style.left = positionX + 'px';
        ball2.style.left = positionX + 'px';
       
               
    } else {
        positionX = positionX + velocity;
        ball.style.left = positionX + 'px';
        ball2.style.left = positionX + 'px';
        
    }
    if (positionX > xMax || positionX === 0) {
        reverse = !reverse;
    }
}
setInterval(moveBall, time);