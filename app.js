//yargs permite gestionar los parametros en la consola de mejor manera
//para probar 
const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
//obtiene el valor del comando(despues de node app "  ")
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarArchivo(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
}
//process.argv retorna el path de node y de la aplicacion, tambien retorna los parametros que se da en la ejecucioin del comando

//console.log(argv.base);