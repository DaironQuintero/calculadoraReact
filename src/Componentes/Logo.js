import React from "react";
import '../Styles/Logo.css'

function Logo (props){
    return(
        <div className="frecodecamp-logo-contenedor">
            <img 
            className='freecodecamp-logo' 
            src={require(`../Imagenes/freecodecamp-${props.imagen}.png`)}
            alt='log de freecodecamp' />
        </div>
    );
}

export default Logo;