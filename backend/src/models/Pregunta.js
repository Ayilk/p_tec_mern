


const { Schema, model, mongoose } = require('mongoose');

const preguntaSchema = new Schema({
    modulo: Number,
    numero: Number,
    pregunta: String,
    respuesta: String,
    imagen: String
});


module.exports = model("Pregunta", preguntaSchema);