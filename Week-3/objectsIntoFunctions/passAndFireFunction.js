var varRed = function fRed(){
    return 3.141;
}
    	
const constBlue = function fBlue(parameterF){
  let letY = parameterF();
  return letY;
}

var varX = constBlue(varRed);