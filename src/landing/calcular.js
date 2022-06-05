import React from "react";

export default function SumaMulti() {
    //Definidos
    const [input, setInput] = React.useState({
      numero1: "",
      numero2: "",
    });
    
    const [result, setResult] = React.useState();
    
    //manejar el cambio de entrada
  
    const handleInput = function (e) {
      setInput({
        ...input,
        [e.target.name]: e.target.value
      });
    };
  
  
    //suma de Celsius
  
    const Celsius = function () {
      setResult(((+input.numero1)-32) * 0.5556+'C');
    };
    
     //multiplicaciones Fahrenheit
  
     const Fahrenheit = function () {
      setResult(((+input.numero1)*1.8) +32 +'F');
    };
    return (
  
      <div>
          <div className='sumaMulti'>
  
              <div className='container'>
                  <h2>Temperatura númerica</h2>
                  <div>
                      <input className='bold-tamaño'
                       onChange={handleInput}
                      name="numero1"
                      value={input.numero1}
                      type="text"
                      ></input>
                       
                  </div>
                  <h3>Opciones</h3>
              <div>
                  <button onClick={Celsius}>Celsius</button>
                  <button onClick={Fahrenheit}>Fahrenheit</button>
              </div>
              <div> 
                  <h4 className='result'>El resultado es: <span className='result-color'> {result} </span> </h4> 
              </div>
              </div>
             
              
              
          </div>
      </div>
      
    );
          
        
  
  }