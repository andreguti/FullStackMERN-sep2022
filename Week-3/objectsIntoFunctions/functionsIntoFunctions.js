const arrayLocations = [];
	
const makePoint = function functionMakePoint(parameterX, parameterY){
  let objectP = {x:parameterX, y:parameterY};
  return objectP;
}

const factory = function functionFactory(parameterN){
  for(let counter = 0; counter < parameterN; counter ++){
    let objectP = makePoint(counter, counter);
    arrayLocations.push(objectP);
  }  
}

factory(3);

console.log('Locations: ' + JSON.stringify(arrayLocations));