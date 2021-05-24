console.log('process.argv', process.argv)
const argumento = process.argv.slice(2)

const n1 = Number(argumento[0]) 
const n2 = Number(argumento[1]) 
const n3 = Number(argumento[2]) 

function suma(){
    const sumar = n1 + n2 + n3;
    const promedio = sumar / argumento.length;
    return promedio
}
console.log(`El promedio es ${suma()}`)