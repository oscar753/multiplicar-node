const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(lista => console.log(`La lista es:\n${lista}`))
            .catch(err => console.log(err));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.blue(archivo)))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');

}

//console.log(multiplicar);
//multiplicar.crearArchivo

//console.log(process.argv);
//let argv2 = process.argv;

//console.log(argv.base);
//console.log('Límite', argv.limite);
//console.log(argv2);

/* let parametro = argv[2];
let base = parametro.split('=')[1]
 */

/*
 */