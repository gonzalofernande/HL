const fs = require('fs');

module.exports = {
    bd: './data/movies.json',
    leerJSON: function(){
        return JSON.parse(fs.readFileSync(this.bd, 'utf-8'));
    },
    cantidadDeVotos: function(){
        
        let pelisMasVotadas = [];
        
        this.leerJSON().movies.filter(element => {
            if(element.vote_average >= 7){
                return pelisMasVotadas.push(element.vote_average);
            }
        }); return pelisMasVotadas;
    },
    promedio: function(){
        
        let raitingtotal = [];

        this.leerJSON().movies.filter(raiting=>{
            if(raiting.vote_average >= 7){
                return raitingtotal.push(raiting.vote_average);
            }
        })

        let promedio = raitingtotal.reduce(function(actual,numero){
            return actual + numero;
        })

        promedioFinal = promedio/raitingtotal.length;

        return promedioFinal;
    },
    listarPelis: function(){
        
        let listado = [];

        this.leerJSON().movies.filter(pelis=>{
            return listado.push(`

            ${pelis.title.toUpperCase()}
            ${pelis.vote_average}
            ${pelis.overview}
            
            `);
        }) 
        return listado.join('');//aplicamos metodo join para quitar la coma que sale luego de cada array 
    }
    
}