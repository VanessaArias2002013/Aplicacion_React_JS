import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App  from "./App";
import Operaciones from "./landing/Operaciones";
import Calcular from "./landing/Calcular";
import Formulario from "./landing/Formulario";

export default function Main() {
    return ( 
        <Router>
            <Routes>
                <Route extract path='/' element={<App />}  />
                <Route extract path='/Operaciones' element={< Operaciones/>} />
                <Route extract path='/Calcular' element={<Calcular />} />
                <Route extract path='/Formulario' element={<Formulario />} />
               
            </Routes>
        </Router>
    )
}