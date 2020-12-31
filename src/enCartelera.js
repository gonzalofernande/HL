const fs = require('fs');

module.exports = {
    bd: './data/movies.json',
    leerJSON: function(){
        return JSON.parse(fs.readFileSync(this.bd, 'utf-8'));
    },
    totalPelis:function(){
        return `Total de Peliculas = ${this.leerJSON().total_movies}`;
    },
    pelisYReseñas: function(){
        let nuevaLista=[]
        let listaCompleta=this.leerJSON();
        listaCompleta.movies.forEach(function(movie){
            return nuevaLista.push(`\n${movie.title.toUpperCase()}
            \n${movie.overview}\n`)
        })
        return nuevaLista.join('');
    }


}