

const { Schema, model, mongoose } = require('mongoose');
const Pregunta = require('./Pregunta');

const moduloSchema = new Schema({    
    id: Number,
    nombre: String,
    preguntas: [{
        type: mongoose.ObjectId,
        ref: 'Pregunta'
      }]
});

module.exports = model("Modulo", moduloSchema);

