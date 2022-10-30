//Tables Exercise

// const multiplier = 3;
// let printHorizontal = '';

// for(let counter = 1; counter <= 10; counter++){
//     let result = multiplier * counter;
//     const splitRight = result + ' ';
//     printHorizontal += splitRight;
// }
// console.log(printHorizontal);

function multipleTables(generateMultiplier, generateCounter){
    
    for(let mult = generateMultiplier; mult <= 10; mult ++){
        let num1 = mult;
        let printHorizontal = '    ';
        for(let count = generateCounter; count <= 10; count ++){
            let num2 = count;
            let result = num1 * num2;
            
            const splitRight = result + '   ';
            printHorizontal += splitRight;
        }
        console.log(printHorizontal);
    }
}

multipleTables(1,1);