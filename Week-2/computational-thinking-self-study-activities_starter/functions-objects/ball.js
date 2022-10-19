var length = data.length;

// you work goes here
// -----------------------
var counter = 0;

while(counter < 4293){
    counter++;
    var ball = data[counter];
    create (ball.x, ball.y, ball.color);
    console.log("X:------>"+ball.x)
}
