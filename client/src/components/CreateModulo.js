import React, { useEffect, useState} from "react";
import axios from 'axios';
import {  useParams } from 'react-router-dom';

const CreateModulo = () => {

    const valorInicial = {
        id: 0,
        nombre: "",
    }

    //Recibimos el parametro para capturar en el id el parametro que mandamos por la url
    let {id}= useParams();
    console.log(id)

    //Aquí creamos la variable de estado Módulo
    const [ modulo, setModulo ] = useState(valorInicial);
    const [ subId, setSubId ] = useState(id);

    const capturaData = (e) => {
        const { name, value } = e.target;
        //trae una copia de lo que ya hay en la variable de estado más lo recién caputardo
        setModulo({...modulo, [name]: value })
    }

    const guardarData = async(e) => {
        // Para que no se recargue la página en cada entrada 
        e.preventDefault();

        //Lógica para el post
        const newModulo = {
            id: modulo.id,
            nombre: modulo.nombre
        }

        await axios.post('http://localhost:8000/api/modulo/', newModulo)


        console.log(modulo);
        //Para reestablecer el formulario en sus valores inciales
        setModulo({...valorInicial});
    }

    //Función para actualizar el usuario en el boton actualizar
    const updateModulo = async(e) => {
        //No queremos que se recarge, pues es una spa no una web estática que tenga que recargar
        e.preventDefault();
        const newModulo = {
            id: modulo.id,
            nombre: modulo.nombre
        }
        await axios.put('http://localhost:8000/api/modulo/' + subId, newModulo);
        setModulo({...valorInicial});
        setSubId('');
    }

    //Lógica para hacer petición a la api para que nos envie el documento específico
    const getOne = async(valorId) =>{
        const res = await axios.get('http://localhost:8000/api/modulo/' + valorId);
        //Guardamos el valor que nos regresa la petición
        setModulo({
            id: res.data.id,
            nombre: res.data.nombre
        })
    }
    //Lo va a montar cada que la variable de estado cambie
    useEffect(()=>{
        if(subId !== ''){
            console.log(subId)
            getOne(subId)
        }
    },[subId])

  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-body">
        <form onSubmit={guardarData}>
            <h2 className="text-center mb-3">Crear Módulo</h2>
          <div className="mb-3">
            <label>Número:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Número del módulo"
              name='id'
              value={modulo.id}
              required
              onChange={capturaData}
            />
          </div>
          <div className="mb-3">
            <label>Nombre:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre del módulo"
              name="nombre"
              value={modulo.nombre}
              required
              onChange={capturaData}
            />
          </div>
          <button className="btn btn-primary form-control">Guardar Módulo</button>
        </form>

        <form onSubmit={updateModulo}>
            <button className="btn btn-danger form-control mt-2">
                Actualizar información
            </button>
        </form>
      </div>
    </div>
  );
};

export default CreateModulo;
