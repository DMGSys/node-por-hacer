    const descripcion = {
        demand: true,
        alias: 'd',
        desc: 'descripcion de la tarea por realizar'
    };
    const completado = {
        default: true,
        alias: 'c',
        desc: 'Marca como completado o pendiente la tarea.'
    };




    const argv = require('yargs')
        .command('crear', 'Crear un elemento por hacer', {
            descripcion

        })
        .command('Listar', 'Lista tareas por hacer', {
            descripcion

        })
        .command('actualizar ', 'Actualizar el estado completado de una tarea', {
            descripcion,
            completado
        })
        .command('borrar ', 'borrar una tarea', {
            descripcion
        })

    .help()
        .argv;


    module.exports = {
        argv
    }