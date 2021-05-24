console.log('process.argv', process.argv)
const argumento = process.argv.slice(2)

const num = Number(argumento[0])

if(num > 0){
    console.log(`El numero es positivo ${num}`)
}else{
    console.log(`El numero es negativo ${num}`)
}
