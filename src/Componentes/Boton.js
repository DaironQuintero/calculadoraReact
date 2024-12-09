import React from "react";
import '../Styles/Boton.css'

function Boton(props){

    const esOperador = valor => { 
        //Este return nos valida si es un operador o no y devuelve un valor
        return isNaN(valor) && (valor !==  '.') && (valor !== '=') //? isNaN es una función que permite identificar si una cadena de caracteres no es un numero
    };

    return(
        <div
            className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ' '}`.trimEnd()}
            //se crea una función anonima que solo se va a llamar una vez
            onClick={() => props.manejarClic(props.children)}> 
            {props.children}
        </div>
    );
}

export default Boton;