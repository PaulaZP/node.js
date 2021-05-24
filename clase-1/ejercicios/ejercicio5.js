console.log('process.argv', process.argv)
const argumento = process.argv.slice(2)

const num1 = Number(argumento[0])
const num2 = Number(argumento[1])

const division = num1 / num2;

if(num1 === 0 || num2 === 0){
    console.log(`Da error ya que el resultado es 0`)
}else{
    console.log(`El resultado de la división es ${division}`)
}