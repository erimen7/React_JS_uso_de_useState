import React from 'react'

const Producto = ({producto,onAgregar}) => {
  const {id,nombre,precio,imagen} = producto;
const Agregar2 =()=>{
    onAgregar(producto);
    alert(`${nombre} - Bs. ${precio} agregado al carrito!!`);
};
    
  return (
    <div className='producto-card'>
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