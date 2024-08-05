
const  Modulo = require('../models/Modulo');

const modulo = {};

modulo.getModulos = (req, res) => {
    Modulo.find()
        .then(modulos => res.json(modulos))
        .catch(err => res.status(500).json({msg: "Hubo un error al buscar los módulos", err}));    
}

modulo.getModuloById = (req, res) => {
    const _id = req.params.id;
    Modulo.findById(_id)
        .then(modulo => res.json(modulo))
        .catch(err => res.status(500).json({msg: "Hubo un error al buscar el módulo", err}));       
}

modulo.createModulo = (req, res) => {
    const {id, nombre} = req.body;
    const newModulo = new Modulo({
        id: id,
        nombre: nombre
    });
    newModulo.save()
        .then(response => res.json({msg: "Módulo creado",success: true}))
        .catch(err => res.status(500).json({msg: "Hubo un error al crear el módulo", err}));    
}

modulo.updateModulo = (req, res) => {
    const {id, nombre} = req.body;  
    const _id = req.params.id;  
    Modulo.findByIdAndUpdate(_id, {id, nombre})
        .then(response => res.json({msg: "Módulo actualizado",success: true}))
        .catch(err => res.status(500).json({msg: "Hubo un error al actualizar el módulo", err}));
}

modulo.deleteModulo = (req, res) => {
    const _id = req.params.id;
    Modulo.deleteOne({_id: _id})
        .then(response => res.json({msg: "Módulo eliminado", success: true}))
        .catch(err => res.status(500).json({msg: "Hubo un error al eliminar el módulo", err}));        
}


module.exports = modulo;


