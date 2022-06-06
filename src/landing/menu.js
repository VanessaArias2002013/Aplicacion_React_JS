import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <div className="links">
            
                <Link to='/'>Inicio</Link>
                <Link to='/Calcular'>Calcular</Link> 
                <Link to='/Formulario' >Formulario</Link> 
                <Link to='/Operaciones' >Operaciones</Link> 

            
        </div>
    )
};
