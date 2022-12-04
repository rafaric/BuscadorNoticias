import React from 'react';
import { Form } from 'semantic-ui-react';
import { useState, useEffect } from "react";
import estilos from './Buscador.module.css'

const Buscador = ({ onBuscar, onLimpiar }) => {
const [criterioBusqueda, setCriterioBusqueda] = useState('');
const [validar, setValidar] = useState(true);

useEffect(() => {
  if (criterioBusqueda.length >= 3){
    setValidar(false);
  } else{
    setValidar(true);
  }
  ;
}, [criterioBusqueda]);


return (
  <Form
    className={estilos.formulario}
    onSubmit={(e) => {
        e.preventDefault();
        onBuscar(criterioBusqueda);
      }}
  >
    <Form.Input
      className={estilos.input}
      placeholder="Buscar..."
      role='text'
      value={criterioBusqueda}
      onChange={(e) => { 
        setCriterioBusqueda(e.target.value)
      }}
    />
    <Form.Group className={estilos.botones}>
      <Form.Button primary disabled={validar} onClick={() => {
          onBuscar(criterioBusqueda);
        }}>Buscar</Form.Button>
      <Form.Button onClick={() => {
          onLimpiar();
          setCriterioBusqueda('');
        }}>Limpiar</Form.Button>
    </Form.Group>
  </Form>
);
};

export default Buscador

