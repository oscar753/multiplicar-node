const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);

        });

        /*listarTabla(base, limite)
            .then(lista =>
                fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, lista, (err) => {
                    if (err)
                        reject(err)
                    else
                        resolve(`tabla-${base}-al-${limite}.txt`);

                })
            )
            .catch(err => console.log(err));
            */
    });
}

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        console.log('============'.blue);
        console.log(`=tabla de ${base}=`.blue);
        console.log('============'.blue);
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let lista = '';
        for (let i = 1; i <= limite; i++) {
            lista += `${base} * ${i} = ${base * i}\n`;
        }
        resolve(lista);
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}