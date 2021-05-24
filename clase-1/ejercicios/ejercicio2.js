console.log('process.argv', process.argv)
const argumento = process.argv.slice(2)

const a = Number(argumento[0])
const b = Number(argumento[1])
const c = Number(argumento[2])

if(a > b & a > c){
    console.log(`El numero mayor es a ${a}`)
}else if(b > c & b < a){
    console.log(`El numero mayor es b ${b}`)
}else{
    console.log(`El numero mayor es c ${c}`)
}