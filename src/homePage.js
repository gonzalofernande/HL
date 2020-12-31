const fs = require('fs');

module.exports = {
    bd: './data/movies.json',
    leerJSON: function(){
        return JSON.parse(fs.readFileSync(this.bd,'utf-8'));

    },
    totalPelis:function(){
        return this.leerJSON().total_movies;
    },
    mostarTitulos: function(){
        let listaDeTitulos=[]
        let listaCompleta=this.leerJSON();
        listaCompleta.movies.forEach(function(movie){
           return listaDeTitulos.push('\n->'+movie.title);
        })
        listaDeTitulos.sort();
        
        return listaDeTitulos.join('');
    }
    
}



