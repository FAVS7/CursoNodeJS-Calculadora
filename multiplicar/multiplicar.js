const fs = require('fs');
const colors = require('colors');

let listarTabla = (base,limite) =>{
    console.log(`==TABLA DEL ${base}==`.green);
    for(let i = 1; i<= limite; i ++){
        console.log(`${base} x ${i} = ${base*i}`);
    }
}

let crearArchivo = (base, limite =10) => {
    return new Promise((resolve, reject) => {
        // Confirmo que la base ingresada sea un numero
        if(!Number(base)){
            reject(`${base} no es un numero, por favor ingrese un numero`);
            return;
        }

        let data = '';

        // For para multiplicar la base hasta el 10
        for(let i = 1; i<=limite; i++)
        {
            data +=(`${base} X ${i} =  ${base*i} \n`);
        }

        // Codigo para crear un archivo nuevo
        //tablas/Tabla ${base}.txt --> tablas es la carpeta donde se va a guardar el archivo
        fs.writeFile(`tablas/Tabla ${base} al ${limite}.txt`,data,(err) =>{
            if(err) 
                reject(err);
            else
                resolve(`tabla del ${base} al ${limite}.txt`.blue);
           
        });

    });
}


module.exports = {
    crearArchivo,
    listarTabla
}


