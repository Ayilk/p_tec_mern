import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

const Lista = () => {
    //Creamos nuestra vaiable de estado
    const [lista, setLista] = useState([]);

    //UsseEffect va a escuchar cada vez que haya un cambio en nuestra dependencia
    //lista, va a renderizar el componente para actualizar la información
    //Así veremos en tiempo real lo que estamos modificando
    useEffect(() => {
        const getModulos = async() => {
            const res = await axios.get('http://localhost:8000/api/modulo');
            //La respuesta de la petición la guardamos utilizndo setLIsta
            setLista(res.data)
        }
        getModulos();
    },[lista])

    const eliminarModulo = async(id) => {
        await axios.delete('http://localhost:8000/api/modulo/' + id);
    }

  return (
    <div className='row'>
        {
            lista.map(e => (
                //Contendor padre con el id de cada uno de los elementos
                <div className='col-md-4 p-2' key={e._id}>
                    <div className='card'>

                        <div className='card-header'>
                            <h5>Módulo {e.id}</h5>
                        </div>

                        <div className='card-body'>
                            <p>Nombre: {e.nombre}</p>
                        </div>

                        <div className='card-footer '>
                            <Link className='btn btn-primary m-1' to={'/PreguntasByModulo/' + e.id}>
                                Ver
                            </Link>
                            {/* Nos redireccionará al formulario con los datos que ya tiene guardados */}
                            <Link className='btn btn-primary m-1' to={'/EditarModulo/' + e._id}>
                                Editar
                            </Link>
                            <button className='btn btn-danger'
                                    onClick={()=> {eliminarModulo(e._id)}}>
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

export default Lista
