

const { Router } = require('express');
const { getModulos, createModulo, getModuloById, updateModulo, deleteModulo } = require('../controllers/modulo.controller');
const router = Router();

router.route('/')
        .get(getModulos)
        .post(createModulo)

router.route('/:id')
        .get(getModuloById)
        .put(updateModulo)
        .delete(deleteModulo)


module.exports = router;