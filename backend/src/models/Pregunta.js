


const { Schema, model } = require('mongoose');

const preguntaSchema = new Schema({
    id: ObjectId,
    pregunta: String,
    respuesta: String,
    imagen: String
});


module.exports = model("Pregunta", preguntaSchema);