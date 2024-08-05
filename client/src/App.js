import './App.css';
import { Routes, Route } from 'react-router-dom'

import Inicio from './components/Inicio'
import Nav from './components/Nav'
import CreateModulo from './components/CreateModulo'
import CreatePregunta from './components/CreatePregunta'
import Lista from './components/Lista'
import Preguntas from './components/Preguntas';

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className='container p-4'>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/listaModulos' element={<Lista/>}/>
          <Route path='/CrearModulo' element={<CreateModulo/>}/>
          <Route path='/EditarModulo/:id' element={<CreateModulo/>}/>
          <Route path='/PreguntasByModulo/:modulo' element={<Preguntas/>}/>
          <Route path='/CrearPregunta' element={<CreatePregunta/>}/>  
          <Route path='/EditarPregunta/:id' element={<CreatePregunta/>}/>        
        </Routes>
      </div>
    </div>
  );
}

export default App;
