
const Pregunta = require("../models/Pregunta");

const pregunta = {};

pregunta.getPreguntas = (req, res) => {
    Pregunta.find()
        .then(preguntas => res.json(preguntas))
        .catch(err => res.status(500).json({msg: "Hubo un error al encontrar las preguntas", err}));
}

pregunta.getPreguntaById = (req, res) => {
    const id = req.params.id;
    Pregunta.findById(id)
        .then(pregunta => res.json(pregunta))
        .catch(err => res.status(500).json({msg: "Hubo un error al encontrar la pregunta", err}));
}

pregunta.getPreguntaByModulo = (req, res) => {
    const modulo = req.params.modulo;
    Pregunta.find({modulo: modulo})
        .then(preguntas => res.json(preguntas))
        .catch(err => res.status(500).json({msg: "Hubo un error al encontrar las pregunta por módulo", err}));
}

pregunta.createPregunta = (req, res) => {
    const {modulo, numero, pregunta, respuesta, imagen} = req.body;
    const newPregunta = new Pregunta({modulo: modulo, numero: numero, pregunta: pregunta, respuesta: respuesta, imagen: imagen});
    newPregunta.save()
        .then(response => res.json({msg: "Pregunta creada", success: true}))
        .catch(err => res.status(500).json({msg: "Hubo un error al crear la pregunta",err}));
}

pregunta.updatePregunta = (req, res) => {
    const {modulo, numero, pregunta, respuesta, imagen} = req.body;
    const _id = req.params.id;
    Pregunta.findByIdAndUpdate(_id, {modulo: modulo, numero, pregunta, respuesta, imagen})
        .then(response => res.json({msg: "Pregunta actualizada", success: true}))
        .catch(err => res.status(500).json({msg: "Hubo un error al actualizar la pregunta",err}));        
}

pregunta.deletePregunta = (req, res) => {
    const _id = req.params.id;
    Pregunta.findByIdAndDelete({_id: _id})
        .then(response => res.json({msg: "Pregunta eliminada", success: true}))
        .catch(err => res.status(500).json({msg: "Hubo un error al eliminar la pregunta", err}));
}

module.exports = pregunta;