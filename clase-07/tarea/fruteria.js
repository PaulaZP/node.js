exports.frutas = function(frutaUsuario){
    
    let frutasArray = ['Manzana', 'Pera', 'Uva', 'Sandía', 'Banano', 'Melocotón', 'Piña', 'Maracuyá', 'Mandarina', 'Mango'];
    let situation = false;
    
    for(let i = 0; i < frutasArray.length; i++){
        if(frutasArray[i] === frutaUsuario.toString()){
            situation = true;
        }
    }
    
    if(situation == true){
        console.log(`La fruta que ingreso si se encuentra`);
    }else{
        console.log(`La fruta que ingreso no se encuentra`);
    }
}