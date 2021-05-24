console.log('process.argv', process.argv)
let argumento = process.argv.slice(2)

console.log("argumento", argumento)

const numero1 = Number (argumento[0])
const numero2 = Number (argumento[1])

const resultado = numero1 + numero2

console.log(`El resultado es ${resultado}`)