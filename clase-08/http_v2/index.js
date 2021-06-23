const http = require('http')
const url = require('url')

const hostname = 'localhost'
const port = 3000

const server = http.createServer((req, res) =>{
    const pathUrl = url.parse(req.url, true)
    console.log('Nombre es', pathUrl.query.nombre)

    res.statusCode = 200
    res.setHeader('content-Type', 'text/plain;charset=utf-8')
    res.write(`Hola ${pathUrl.query.text} ${pathUrl.query.nombre}`)
    res.end()
})

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}`)
})

//http://localhost:3000/?nombre=Paula&text=hola
//http://localhost:3000/?num1=10&num2=30