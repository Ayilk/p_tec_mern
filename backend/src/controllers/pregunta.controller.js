
const Pregunta = require("../models/Pregunta");

const pregunta = {};

pregunta.getPregunta = (req, res) => {
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

pregunta.createPregunta = (req, res) => {
    const {numero, pregunta, respuesta, imagen} = req.body;
    const newPregunta = new Pregunta({numero: numero, pregunta: pregunta, respuesta: respuesta, imagen});
    Pregunta.save(newPregunta)
        .then(response => res.json({msg: "Pregunta creada", success: true}))
        .catch(err => res.status(500).json({msg: "Hubo un error al crear la pregunta",err}));
}

pregunta.updatePregunta = (req, res) => {
    const {numero, pregunta, respuesta, imagen} = req.body;
    const id = req.params.id;
    Pregunta.findByIdAndUpdate(id, {numero, pregunta, respuesta, imagen})
        .then(response => res.json({msg: "Pregunta actualizada", success: true}))
        .catch(err => res.status(500).json({msg: "Hubo un error al actualizar la pregunta",err}));        
}

pregunta.deletePregunta = (req, res) => {
    const id = req.params.id;
    Pregunta.findByIdAndDelete(id)
        .then(response => res.json({msg: "Pregunta eliminada", success: true}))
        .catch(err => res.status(500).json({msg: "Hubo un error al eliminar la pregunta", err}));
}