const homePage = require('./homePage');
const enCartelera = require('./enCartelera');
const masVotadas = require('./masVotadas');
const sucursales = require('./sucursales');
const contacto = require('./contacto');
const preguntasFrecuentes = require('./preguntasFrecuentes');



module.exports = {
    homePage: function(req,res){
        res.write('Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn\n\n' );
        res.write(`\t\t\t\t\t\t\t\t Total de nuestras peliculas =${homePage.totalPelis()}\n\n`);
        res.write('Mira nuestras peliculas:\n')

        res.write(`${homePage.mostarTitulos()}`)

        res.write('\n\n\nRecorda que podes visitar las secciones:\n-En Cartelera\n-Más Votadas\n-Sucursales\n-Contacto\n-Preguntas Frecuentes'); 
        res.end();
    },
    enCartelera: function(req,res){
        res.write(`En Cartelera\n\n`);

        res.write(`\t\t\t\t\t\t\t\t${enCartelera.totalPelis()}\n\n`)
        
        res.write(`${enCartelera.pelisYReseñas()}`)
        res.end()
    },
    masVotadas: function(req,res){
        
        res.write('MAS VOTADAS\n\n');
        res.write(`Total de peliculas mas votadas: ${masVotadas.cantidadDeVotos().length}`);//invocamos mediante la constante masVotadas el metodo cantidadDeVotos() y le aplicamos la prop length
        
        res.write(`\n\nRAITING PROMEDIO: ${masVotadas.promedio().toFixed(2)}`);

        res.write(`${masVotadas.listarPelis()}`)
        res.end();
    },
    sucursales: function(req,res){

        res.write('NUESTRAS SALAS\n\n');
        res.write(`Total de salas: ${sucursales.leerJSON().total_theaters}\n\n`);
        res.write(`LISTADO DE SALAS: ${sucursales.listarSalas()}`);
        res.end();
    },
    preguntasFrecuentes: function(req,res){
        res.write(`${preguntasFrecuentes.titulo} \n\n`);
        res.write(`${preguntasFrecuentes.totalFaqs()} \n\n`);
        preguntasFrecuentes.faqs().forEach(element => {
            res.write(`Pregunta: ${element.faq_title} \n`);
            res.write(`Respuesta: ${element.faq_answer} \n\n`);
        });
        res.end();
    },
    contacto: function (req,res) {
        res.write(contacto.titulo + '\n\n')
        res.end(contacto.contenido);
    }
}
