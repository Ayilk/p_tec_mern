
const  Modulo = require('../models/Modulo');

const modulo = {};

modulo.getModulo = async(req, res) => {
    const modulos = await Modelo.find()
    res.json(modulo)
}

modulo.createModulo = async(req, res) => {
    
}

modulo.updateModulo = async(req, res) => {
    
}

modulo.deleteModulo = async(req, res) => {
    
}


