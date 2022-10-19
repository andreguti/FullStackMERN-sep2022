var ball = document.getElementById("ball");
var ball2 = document.getElementById('ball2');
var velocity = 8;
var positionX = 0;
var reverse = false;
var size1 = 0;
var size2 = 0;
var size3 = 0;
var size4 = 0;
const xMax = 2600;
var time = 20;

function sizeChange(){
    if (reverse) {
        positionX = positionX - velocity;
        ball.style.width = size1 + 'px';
        ball.style.height = size1 + 'px';
        ball2.style.width = size2 + 'px';
        ball2.style.height = size2 + 'px';
       
       
        //console.log(`Size left: ----> ${size1}`);
        
               
    } else {
        
        positionX = positionX + velocity;
        ball.style.width = size3 + 'px';
        ball.style.height = size3 + 'px';
        ball2.style.width = size4 + 'px';
        ball2.style.height = size4 + 'px';
       
      
    }
    if (positionX > xMax || positionX === 0) {
        reverse = !reverse;
        size1 = getRandomInt(300);
        size2 = getRandomInt(150);
        size3 = getRandomInt(300);
        size4 = getRandomInt(150);
    }
}
//This function generate a random integer number 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//getRandomInt(300)
setInterval(sizeChange, time);
// setInterval(getRandomInt, 100);