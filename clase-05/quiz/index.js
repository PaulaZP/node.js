const colors = require('colors/safe');
const argumento = process.argv.slice(2);

//es un arreglo que va a guardar todos los números
let numero = [];

//pedir los numeros
let num1 = Number(argumento[0]);
let num2 = Number(argumento[1]);

//para sacar los numeros mayores
function numMayor(){
    for(let i = 0; i < numero.length; i++){
        if(num1 >= num2){
            numero.push(num1);
        }else{
            numero.push(num2);
        }
    }
}

//para sacar los numeros menores
function numMenor(){
    for(let g = 0; g < numero.length; g++){
        if(num1 <= num2){
            numero.push(num1);
        }else{
            numero.push(num2);
        }
    }
}


console.log(colors.green(`El número mayor es: ${numMayor()})`, colors.red(`el número menor es: ${numMenor}`), `La lista de números es: ${numero}`));