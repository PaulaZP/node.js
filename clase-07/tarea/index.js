const operacion = require('./fruteria');
console.log("process.argv", process.argv);

const frutaUsuario = process.argv.slice(2);

operacion.frutas(frutaUsuario);
