const fs = require('fs');
const colors = require('colors');

listarArchivo = (base, limite) => {
    console.log('===================='.green);
    console.log(`==tabla de ${ base }==`.green);
    console.log('===================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${ base * i }`);
    }
}
crearArchivo = (base, limite) => {
        return new Promise((resolve, reject) => {
            if (!Number(base)) {
                reject(`El valor ingresado ${base} no es un numero`);
                return;
            }
            let data = '';
            for (let index = 1; index <= limite; index++) {
                data += `${base} x ${index} = ${index * base}\n`;
            }

            fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(`tabla-${base}-al-${limite}.txt`);
                }
            });

        })
    }
    //exporta para usarlo como una libreria
module.exports = {
    crearArchivo: crearArchivo,
    listarArchivo: listarArchivo
}