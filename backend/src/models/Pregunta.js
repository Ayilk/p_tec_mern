


const { Schema, model, mongoose } = require('mongoose');

const preguntaSchema = new Schema({
    numero: Number,
    pregunta: String,
    respuesta: String,
    imagen: String
});


module.exports = model("Pregunta", preguntaSchema);