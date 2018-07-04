//const argv = require(`yargs`).argv;

const argv = require('./config/yargs').default.argv;
const porHacer = require('./por-hacer/por-hacer').default;
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

        let actulizado = porHacer.actulizadar(argv.descripcion, argv.completado);
        console.log(actulizado);
        break;

    default:
        console.log(`Comando no es reconocido`);
}