import React from "react";
import '../Styles/Pantalla.css'
//En esta fución flecha usamos parentecis porque se va a retornar directamente la estructura del componente
const Pantalla = ({input}) => (
    <div className="input">
        {input}
    </div>
);

export default Pantalla;