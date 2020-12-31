const fs = require('fs');

module.exports = {
    bd: './data/faqs.json',
    titulo: 'Preguntas Frecuentes',
    leerJSON: function(){
        return JSON.parse(fs.readFileSync(this.bd, 'utf-8'));
    },
    faqs: function(){
        return this.leerJSON().faqs;
    },
    totalFaqs: function(){
        return `Total de preguntas = ${this.leerJSON().total_faqs}`;
    },
}