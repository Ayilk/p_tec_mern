import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  useParams } from 'react-router-dom';

const CreatePregunta = () => {

  
  const valorInicial = {
    modulo: '',
    numero: 0,
    pregunta: '',
    respuesta: '',
    imagen: '',
  }
  
  let {id}= useParams();

  const [ pregunta, setPregunta ] = useState(valorInicial);
  const [ subId, setSubId ] = useState(id || '');


  const capturarData = (e) =>{
    const { name, value} = e.target;
    setPregunta({...pregunta, [name]: value});
  }

  const guardarData = async(e) => {
    e.preventDefault();
    const newPregunta = {
      modulo : pregunta.modulo,
      numero: pregunta.numero,
      pregunta: pregunta.pregunta,
      respuesta: pregunta.respuesta,
      imagen: pregunta.imagen   
    }
    await axios.post('http://localhost:8000/api/preguntas/', newPregunta);
    setPregunta({...valorInicial});
  }

  const updatePregunta = async(e) => {
    e.preventDefault();
    const newPregunta = {
      modulo : pregunta.modulo,
      numero: pregunta.numero,
      pregunta: pregunta.pregunta,
      respuesta: pregunta.respuesta,
      imagen: pregunta.respuesta   
    }
    await axios.put('http://localhost:8000/api/preguntas/' + subId, newPregunta);
    setPregunta({...valorInicial});
    setSubId('');
  }

  const getOne = async(valorId) =>{
    const res = await axios.get('http://localhost:8000/api/preguntas/' + valorId);
    setPregunta({
      modulo : res.data.modulo,
      numero: res.data.numero,
      pregunta: res.data.pregunta,
      respuesta: res.data.respuesta,
      imagen: res.data.imagen  
    })
}

  useEffect(() => {
    if(subId !== ''){
      getOne(subId)
    }
  },[subId])

  

  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-body">
        <form onSubmit={guardarData}>
            <h2 className="text-center mb-3">Crear Pregunta</h2>
          <div className="mb-3">
            <label>Módulo</label>
            <input
              type="number"
              className="form-control"
              placeholder="¿De qué módulo es tu pregunta?"
              name='modulo'
              value={pregunta.modulo}
              required
              onChange={capturarData}
            />
          </div>
          <div className="mb-3">
            <label>Número</label>
            <input
              type="number"
              className="form-control"
              placeholder="Número de la pregunta"
              name='numero'
              value={pregunta.numero}
              required
              onChange={capturarData}
            />
          </div>
          <div className="mb-3">
            <label>Pregunta</label>
            <input
              type="text"
              className="form-control"
              placeholder="¿Cuál es tu pregunta?"
              name="pregunta"
              value={pregunta.pregunta}
              required
              onChange={capturarData}
            />
          </div>
          <div className="mb-3">
            <label>Respuesta</label>
            <input
              type="text"
              className="form-control"
              placeholder="Escribe la respuesta a la pregunta"
              name="respuesta"
              value={pregunta.respuesta}
              onChange={capturarData}
            />
          </div>
          <div className="mb-3">
            <label>Imagen</label>
            <input
              type="text"
              className="form-control"
              placeholder="Introduce la URL de la imagen"
              name="imagen"
              value={pregunta.imagen}
              onChange={capturarData}
            />
          </div>
          <button className="btn btn-primary form-control">Guardar Pregunta</button>
        </form>

        <form onSubmit={updatePregunta}>
            <button className="btn btn-danger form-control mt-2">
                Actualizar información
            </button>
        </form>
      </div>
    </div>
  )
}

export default CreatePregunta
