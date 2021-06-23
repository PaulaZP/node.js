const http = require('http')
const url = require('url')
const resultado = require('./app')

const hostname = 'localhost'
const port = 3000

const server = http.createServer((req, res) =>{
    const pathUrl = url.parse(req.url, true) 

    res.statusCode = 200 //res palabra reservada son los parametros que vamos a recibir que son los resultados que le vamos a mandar a los usuarios
    res.setHeader('content-Type', 'text/plain;charset=utf-8')
    res.write(`El resultado de la suma es: ${resultado.operacion(pathUrl.query.num1,pathUrl.query.num2)}`)
    res.end()
})

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}`)
})