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
            console.log(subId)
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
        {
            preguntas.map(e => (
                <div className="col-md-12" key={e._id}>
                    <div className="card">
                        <div className='card-header'>
                            <h5>{e.modulo +'.'+ e.numero}</h5>
                        </div>

                        <div className='card-body'>
                            <p>{e.pregunta}</p>
                            <p>{e.respuesta? e.respuesta : ''}</p>
                            <p>{e.imagen? e.imagen : ''}</p>
                        </div>

                        <div className='card-footer '>
                            
                            <Link className='btn btn-primary m-1' to={'/EditarPregunta/' + e._id}>
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
