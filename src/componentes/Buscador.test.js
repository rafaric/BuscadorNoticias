import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import React from 'react';
import Buscador from './Buscador';

const onBuscar = jest.fn();
describe('Componente Buscador', () =>{
  let botonBuscar;
  let input;
  beforeEach(()=>{
    const componente = render(<Buscador onBuscar={onBuscar}/>);
    componente.debug();
    botonBuscar = screen.getByRole('button', {name:'Buscar'});
    input = screen.getByRole('text',{placeholder:'Buscar...'})
  });

  test('El input está en el documento', () =>{
    expect(input).toBeInTheDocument();
  });
  test('El botón está deshabilitado', () =>{
    expect(botonBuscar).toBeDisabled();
  })
  test('El boton se habilita al escribir tres letras y permite la busqueda', ()=>{
    fireEvent.change(input, {target: {value: 'tes'}});
    fireEvent.click(botonBuscar);
    expect(onBuscar).toBeCalledWith('tes');
    
  })
})

