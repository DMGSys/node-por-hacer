const fs = require('fs');

let listadoPorHacer = [];

const guardaDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {

        if (err) throw new Error('no se pudo grabar', err); {

        }
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json')
    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardaDB();
    return porHacer;
}
const getListados = () => {
    cargarDB();
    return listadoPorHacer;
}

module.exports = {
    crear,
    getListados
}