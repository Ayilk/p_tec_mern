import './App.css';
import { Routes, Route } from 'react-router-dom'

import Nav from './components/Nav'
import CreateModulo from './components/CreateModulo'
import CreatePregunta from './components/CreatePregunta'
import Lista from './components/Lista'

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className='container p-4'>
        <Routes>
          <Route path='/' element={<Lista/>}/>
          <Route path='/CrearModulo' element={<CreateModulo/>}/>
          <Route path='/EditarModulo/:id' element={<CreateModulo/>}/>
          <Route path='/CrearPregunta' element={<CreatePregunta/>}/>  
          <Route path='/EditarPregunta/:id' element={<CreatePregunta/>}/>        
        </Routes>
      </div>
    </div>
  );
}

export default App;
