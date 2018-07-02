const fs = require('fs');

let listadoPorHacer = [];

const guardaDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {

        if (err) throw new Error('no se pudo grabar', err); {

        }
    });
}

const crear = (descripcion) => {
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardaDB();
    return porHacer;
}


module.exports = {
    crear
}