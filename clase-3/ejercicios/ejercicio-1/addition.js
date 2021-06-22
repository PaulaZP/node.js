function positivo(num){
    let media = 0;
    let resultado = 0;

    for(let i = 0; i < num.length; i++){
        if(Math.sign(Number(num[i])) === 1){
            media += Number(num[i]);
        }
    }

    resultado = media/num.length;
    return resultado;
}

function negativo(num){
    let media = 0;
    let resultado = 0;

    for(let i = 0; i < num.length; i++){
        if(Math.sign(Number(num[i])) === -1){
            media += Number(num[i]);
        }
    }

    resultado = media/num.length;
    return resultado;
}

exports.media = function(num){
    console.log(positivo(num));
    console.log(negativo(num));
}