import './App.css';
import Logo from './Componentes/Logo';
import Boton from './Componentes/Boton';
import Pantalla from './Componentes/Pantalla';
import BotonClear from './Componentes/BotonClear';
import { useState } from 'react';
import {evaluate} from 'mathjs'; //Esta dependencia nos permite evaluar una expresión como una cadena de caracteres y la transforma en una expresion matematica

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  }

  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input));
    }else{
      alert('Por favor ingrese una valor para realizar los cálculos.😉')
    }
  };

  return (
    <div className="App">
        <Logo imagen = 'logo' />
      <div className='contenedor-calculadora'>

        <Pantalla  input={input}/>

        <div className='fila'>
          <Boton manejarClic = {agregarInput}>1</Boton>
          <Boton manejarClic = {agregarInput}>2</Boton>
          <Boton manejarClic = {agregarInput}>3</Boton>
          <Boton manejarClic = {agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic = {agregarInput}>4</Boton>
          <Boton manejarClic = {agregarInput}>5</Boton>
          <Boton manejarClic = {agregarInput}>6</Boton>
          <Boton manejarClic = {agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic = {agregarInput}>7</Boton>
          <Boton manejarClic = {agregarInput}>8</Boton>
          <Boton manejarClic = {agregarInput}>9</Boton>
          <Boton manejarClic = {agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic = {calcularResultado}>=</Boton>
          <Boton manejarClic = {agregarInput}>0</Boton>
          <Boton manejarClic = {agregarInput}>.</Boton>
          <Boton manejarClic = {agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
