import React from 'react'
import { useTema } from '../context/TemaContext';

const Producto = ({producto,onAgregar}) => {
  const {id,nombre,precio,imagen} = producto;
  const {tamañoLetra} = useTema();
const Agregar2 =()=>{
    onAgregar(producto);
    alert(`${nombre} - Bs. ${precio} agregado al carrito!!`);
};
const productoStyle ={
    fontSize: tamañoLetra === 'medium' ? '16px':
              tamañoLetra === 'pequeño' ? '12px':
              tamañoLetra === 'grande' ? '20px': '25px'

    };


  return (
    <div className='producto-card' style={productoStyle}>
        <div className='producto-imagen'>{imagen}</div>
        <div className='producto-info'>
            <h3 className='producto-nombre'>{nombre}</h3>
            <p className='producto-precio'>Bs. {precio.toFixed(2)}</p>
            <button className='btn-agregar'
            onClick={Agregar2}>
                🧿Agregar Al Carrito
            </button>
        </div>
    </div>
  )
}

export default Producto;