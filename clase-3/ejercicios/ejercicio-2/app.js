const addition = require('./addition');

const argumento = process.argv.slice(2);

const diametro = Number(argumento[0]);
const altura = Number(argumento[1]);

console.log(addition.operacion(diametro,altura));