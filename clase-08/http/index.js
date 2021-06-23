const http = require('http');

const server = http.createServer((req, res) =>{
    res.writeHead(200,{contentType: 'text/plain; charset=utf-8'}) //200 de todo esta bien respuesta de tipo de texto plano
    res.write('Hola Mundo!')
    res.end()
});

server.listen(5000) // escuchar el server en el puerto 5000
console.log('node.js listening on port 5000')