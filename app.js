//const argv = require(`yargs`).argv;

const argv = require('./config/yargs').default.default.argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');
console.log(argv);

let comando = argv._[0];
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(`tarear por hacer`);
        break;

    case 'listar':
        let listado = porHacer.getListados();
        for (let tarea of listado) {
            console.log('========Por Hacer=============='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('==============================='.green);
        }

        break;

    case 'actualizar':
        console.log(`Actualiza una tarea por hacer`);
        break;

    default:
        console.log(`Comando no es reconocido`);
}