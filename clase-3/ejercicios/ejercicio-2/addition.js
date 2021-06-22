exports.operacion = function(diametro, altura){
    let r = diametro/2;
    let v = 3.14 * (r ^ 2) * altura;
    console.log(`El volumen del cilindro es de ${v} metros cúbicos`);
}
