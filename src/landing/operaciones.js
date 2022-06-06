import React, { useEffect, useState } from "react";
import Menu from "../landing/Menu";

export default function Operaciones() {
    //hook defined
    const [input, setInput] = React.useState({
      numero1: "",
      numero2: "",
    });
    
    const [result, setResult] = React.useState();
    
    //handle input change
  
    const handleInput = function (e) {
      setInput({
        ...input,
        [e.target.name]: e.target.value
      });
    };
  
  
    //suma function
  
    const suma = function () {
      setResult((+input.numero1) + (+input.numero2));
    };
    
     //multi function
  
     const multi = function () {
      setResult((+input.numero1) * (+input.numero2));
    };
    return (
  
      <div>
        <Menu></Menu>
          <div className='sumaMulti '>
  
              <div className='contenido'>
              
                  <h2> Escribe dos números para sumar/multiplicar</h2>
                  <div>
                      <input className='bold-tamaño'
                       onChange={handleInput}
                      name="numero1"
                      value={input.numero1}
                      type="text"
                      ></input>
                      <input className='bold-tamaño'
                      onChange={handleInput}
                      name="numero2"
                      value={input.numero2}
                      type="text"
                      ></input>
                  </div>
                  <h3>Opciones</h3>
              <div>
                  <button onClick={suma}>sumar</button>
                  <button onClick={multi}>multiplicar</button>
              </div>
              <div> 
                  <h4 className='result'>El resultado es: <span className='result-color'> {result} </span> </h4> 
              </div>
              </div>
              
              
          </div>
      </div>
    );
          
        
  
  }
  
