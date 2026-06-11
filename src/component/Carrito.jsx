import React, {useState} from 'react'
import { useTema } from '../context/TemaContext';

const Carrito = ({items,onEliminar,onActualizarCantidad}) => {
    const [mostrarCarrito, setMostrarCarrito]=useState(true);
     const {tamañoLetra} = useTema();
    const calcularTotal=()=> {
        return items.reduce((total,item)=> total+(item.precio*item.cantidad),0);
    };
    const carritoStyle ={
    fontSize: tamañoLetra === 'medium' ? '16px':
              tamañoLetra === 'pequeño' ? '12px':
              tamañoLetra === 'grande' ? '20px': '25px'

    };

if(items.length===0){
    return(
    <div className="carrito">
        <div className="carrito-header">
            <h2> Mi Carrito </h2>
        </div>
        {mostrarCarrito && (
            <div className='carrito-item'>
                <p>Tu carrito esta vacio</p>
            </div>
        )}
    </div>
    );
}

  return (
    <div className="carrito" style={carritoStyle}>
        <div className="carrito-header">
            <h2> Mi Carrito ({items.length})</h2>
        </div>
        {mostrarCarrito && (
        <div className='carrito-items'>    
            {items.map(item => (
                <div key={item.id} className="carrito-item">
                    <div className='item-info'>
                        <span className='item-imagen'> {item.imagen} </span>
                        <div className='item-details'>
                            <h4>{item.nombre}</h4>
                            <p>Bs. {item.precio.toFixed(2)} c/u</p>    
                        </div>  
                    </div>
                    <div className='item-controls'>
                        <div className='cantidad-controls'>
                            <button
                            onClick={() => onActualizarCantidad(item.id, item.cantidad+1)}
                            className='btn-cantidad'
                            > + </button>
                            <span className='cantidad'>{item.cantidad}</span>
                            <button
                            onClick={() => onActualizarCantidad(item.id, item.cantidad-1)}
                            className='btn-cantidad'
                            > - </button>
                        </div>
                        <div className='item-subtotal'>
                            Bs. {(item.precio*item.cantidad).toFixed(2)}
                        </div>
                            <button
                            onClick={() => onEliminar(item.id)}
                            className='btn-eliminar'>
                            🗑
                            </button>
                </div>
            </div>
          ))}
          
          <div className="carrito-total">
            <strong>Total: Bs.{calcularTotal().toFixed(2)}</strong>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;