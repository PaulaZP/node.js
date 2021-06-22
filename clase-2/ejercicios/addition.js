exports.operacion = function(num1, num2,operacion){
    if(operacion === 1){
        return operacionSumar();
        
    }else if(operacion === 2){
        return operacionMultiplicar();
        
    }else if(operacion === 3){
        if(num1 === 0 || num2 === 0){
            console.log(`Da error ya que el resultado es 0`)
        }else{
            console.log(`El resultado de la división es ${operacionDividir()}`)
        }

    }else{
        return operacionRestar();
    }

    /*------operaciones------ */
    
    function operacionSumar(){
        const suma = num1 + num2;
        return suma;
    }

    function operacionMultiplicar(){
        const multi = num1 * num2;
        return multi;
    }

    function operacionDividir(){
        const dividir = num1 / num2;
        return dividir;
    }
    
    function operacionRestar(){
        const restar = num1 - num2;
        return restar;
    }
}
