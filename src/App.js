import React from 'react';
import './App.css';
import {Menu} from './menu';
import Calcular from './landing/calcular';
import Formulario from './landing/formulario';
import Operaciones from './landing/operaciones';

function App() {
  return (

    <body>
       <h1 className="titulo">Vanessa Del Rosario Dominguez Arias - TI51</h1>
    <div>
    <Menu></Menu>
      
      
    <div className='Operaciones'>
      <Operaciones />
    </div>
    <div className="App">
      <Calcular />
      <Formulario />
    </div>
    </div>
    </body>
  );
};

export default App;