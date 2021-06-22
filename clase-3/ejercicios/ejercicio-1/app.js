const operacion = require('./addition');
console.log("process.argv", process.argv);
const num = process.argv.slice(2);

operacion.media(num);
