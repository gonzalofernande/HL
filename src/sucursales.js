const fs = require('fs');

module.exports = {
    bd: './data/theaters.json',
    leerJSON: function(){
        return JSON.parse(fs.readFileSync(this.bd, 'utf-8'));
    },
    listarSalas: function(){

        let listado = [];

        this.leerJSON().theaters.forEach(element => {
            return listado.push(`
            
            ${element.name.toUpperCase()}
            *****************************
            
            DIRECCION: ${element.address}
            *****************************
            DESCRIPCION: ${element.description}
            
            `);
        });
        return listado.join('');
    }
    
}