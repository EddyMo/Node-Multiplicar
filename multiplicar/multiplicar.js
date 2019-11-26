//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log('==========================='.green);
    console.log(`Tabla de ${base}`.yellow);
    console.log('==========================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${(base*i)}`);
    }

    /*
    return new Promise((resolve, reject) => {
        // if (!Number(base)) {
        //     reject(`La base introducida ${base} no se un numero`);
        //     return;
        // }
        // if (!Number(limite)) {
        //     reject(`El límite introducido ${limite} no se un numero`);
        //     return;
        // }
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${(base*i)}`);
        }
    })
    */
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base introducida ${base} no se un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El limite introducido ${limite} no se un numero`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            //console.log(`${base} * ${i} = ${(base*i)}`);
            data += `${base} * ${i} = ${(base*i)}\n`;
        }

        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            //if (err) throw err;
            // console.log(`El archivo tabla-${base}.txt ha sido creado`);
            if (err) reject(err)
            else resolve(`tabla-${base}.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}