import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';



const Preguntas = (props) => {
    let {modulo}= useParams();

    const [ preguntas, setPreguntas ] = useState([]);
    const [ subId, setSubId ] = useState(modulo);

    useEffect(() => {
        const getPreguntasByModulo = async(valorId) => {
            const res = await axios.get('http://localhost:8000/api/preguntas/m/' + valorId);
            setPreguntas(res.data)    
        }
        if(subId !== ''){
            getPreguntasByModulo(subId)
        }
    //     const getPreguntas = async()=>{
    //         const res = await axios.get('http://localhost:8000/api/preguntas');
    //         setPreguntas(res.data);
    //     }
    //     getPreguntas();
    // }, [preguntas, subId])
   }, [subId])

    const eliminarPregunta = async(id) => {
        await axios.delete('http://localhost:8000/api/preguntas/' + id);
    }


  return (
    <div className='row'>
        <div className="h1 text-center">Preguntas del módulo {modulo}</div>
        {
            preguntas.map(e => (
                <div className="col-md-12" key={e._id}>
                    <div className="card">
                        <div className='card-header'>
                            <h5>{e.modulo +'.'+ e.numero + '.- ' + e.pregunta}</h5>
                        </div>

                        
                        <div className="card-body">
                            <div className="h3">Respuesta</div>
                        <p>{e.respuesta}</p>
                        <img src={e.imagen} />
                        </div>

                        <div className='card-footer '>
                            
                            <Link className='btn btn-primary m-2' to={'/EditarPregunta/' + e._id}>
                                Editar
                            </Link>
                            <button className='btn btn-danger'
                                    onClick={()=> {eliminarPregunta(e._id)}}>
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Preguntas
