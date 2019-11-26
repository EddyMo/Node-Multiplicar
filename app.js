//requireds
//const fs = require('fs');
//const multiplicar = require('./multiplicar/multiplicar');
//const {  } = require('./multiplicar/multiplicar').listarTabla;
//console.log(argv);
const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        // .then(archivo => console.log(`Archivo creado ${archivo}`))
        // .catch(err => console.log(`Error: ${err}`));
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo.green}`))
            .catch(err => console.log(`Error: ${err}`));
        break;
    default:
        console.log(`Comando ${comando} no reconocido`);
}



//console.log(argv2);
// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado ${archivo}`))
//     .catch(err => console.log(`Error: ${err}`));



/*
let data = '';
for (let i = 1; i <= 10; i++) {
    //console.log(`${base} * ${i} = ${(base*i)}`);
    data += `${base} * ${i} = ${(base*i)}\n`;
}
fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base}.txt ha sido creado`);
});
*/