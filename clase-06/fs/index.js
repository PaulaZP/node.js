const fs = require('fs') //require siempre importar un modulo fs de node
let path = process.cwd(); // ruta actual de vuelve

const user = {
    "id":1,
    "name":"John Doe",
    "age":22,
};

//convert JSON object to string - converir el json a string
const data = JSON.stringify(user);

//se utiliza para escribir de forma asincrónica los datos especificados en un archivo.
fs.writeFile(`${path}/holamundo.json`, data, function(err,data){ //data contenido del archivo
    if(err)
        return console.error(err);
    else    
        console.log("Archivo creado y salvado")
});

//crear si no existe , y si existe entonces agrega el contenido al final
fs.appendFile(`${path}/holamundo.txt`, "\n hola", function(err,data){ //data contenido del archivo
    if(err)
        return console.error(err);  
    console.log("se ha actualizadfo el archivo")
});

//es un método incorporado que se utiliza para leer el archivo
fs.readFile(`${path}/holamundo.txt`,'utf8', function(err,data){
    if(err)
        return console.error(err);  
    //console.log(JSON.stringify(data)) se muetra con comillas
    console.log(data)
});

//crear el archivo
fs.open(`${path}/nuevoarchivo.txt`,'w', function(err,fd){
    if(err)
        return console.error(err);  
    
    fs.write(fd, 'Esta es mi primera linea', 'utf8', function(err){
        if(err)
            return console.error(err); 
    })
});

fs.unlink(`${path}/nuevoarchivo.txt`, function(err){
    if(err)
        return console.error(err); 
    console.log('se ha eliminado el archivo')    
})

