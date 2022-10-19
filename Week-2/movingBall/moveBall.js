//Set global variable that would contain the position, velocity and the html element "ball"
var velocity = 15;
var positionX = 0;
var ball = document.getElementById('ball');
var time = 100;
var reverse = false;
var Xmin = 0;
var Xmax = 300;
var positionY = 0;
var Ymin = 0;
var Ymax = 300;

function moveBall() {
    if (reverse) {
        positionX = positionX - velocity;
        positionY = positionY - velocity;
        ball.style.left = positionX + 'px';
        ball.style.top = positionY + 'px';
        ball.style.background = 'black';
        ball.style.height = '150px';
        ball.style.width = '150px';
        console.log(`Izquierda:-----> ${positionX}`);
    } else {
        positionX = positionX + velocity;
        ball.style.left = positionX + 'px';
        positionY = positionY + velocity;
        ball.style.top = positionY + 'px';
        ball.style.background = 'red';
        ball.style.height = '30px';
        ball.style.width = '30px';
        console.log(`Derecha:-----> ${positionX}`);
    }
    if (positionX > Xmax || positionX === Xmin || positionY > Ymax || positionY === Ymin) {
        reverse = !reverse;
    }
    
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
 
// This call the functions every 100ms
setInterval(moveBall, time);
//setInterval(getRandomInt, time);
moveBall(20);