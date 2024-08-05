
const { Router } = require('express');
const { getPreguntas, createPregunta, getPreguntaById, updatePregunta, deletePregunta, getPreguntaByModulo } = require('../controllers/pregunta.controller');

const router = Router();

router.route('/')
        .get(getPreguntas)
        .post(createPregunta)

router.route('/:id')
        .get(getPreguntaById)
        .put(updatePregunta)
        .delete(deletePregunta)

router.route('/m/:modulo')
        .get(getPreguntaByModulo)

module.exports = router;