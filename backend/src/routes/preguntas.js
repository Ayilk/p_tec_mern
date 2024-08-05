
const { Router } = require('express');
const { getPreguntas, createPregunta, getPreguntaById, updatePregunta, deletePregunta } = require('../controllers/pregunta.controller');

const router = Router();

router.route('/')
        .get(getPreguntas)
        .post(createPregunta)

router.route('/:id')
        .get(getPreguntaById)
        .put(updatePregunta)
        .delete(deletePregunta)

module.exports = router;