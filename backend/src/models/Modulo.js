

const { Schema, model } = require('mongoose');

const moduloSchema = new Schema({
    id: Number,
    nombre: String,
    preguntas: [
        {
            pregunta: Schema.Pregunta.ObjectId,
            ref: "Preguntas",
        }
    ]
});

module.export = model("Modulo", moduloSchema);