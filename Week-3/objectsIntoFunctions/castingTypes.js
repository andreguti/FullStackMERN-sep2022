let a = '10'
let b = 5
// aqui se castea automático el string + el number
//a = a + b
//imprime 105
//console.log(a);

//Para que el código sea claro, hay que castear explícitamente los tipos. 
// la función .toString() convierte b en string
//a = a + b.toString();
//imprime 105, pero ahora el 5 es un string en lugar de integer
//console.log(a);

//para que se haga la suma en lugar de la concatenación, hay que castear "a" para que se convierta a numero
b = b + Number(a);
//imprime 15
console.log(b);