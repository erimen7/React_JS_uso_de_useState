import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Formulario from './component/Formulario';
import Click2 from './component/Click2';
import Producto from './component/Producto';
import Carrito from './component/Carrito'
import './estilo.css';
import { TemaProvider,useTema } from './context/TemaContext';
import ControlesTema from './component/ControlesTema'; 

const AppContent = () => {
  // estado de carrito
  const [carrito, setCarrito] = useState([]);
  const {colorFondo, tamañoLetra, colores} = useTema();
  //productos disponibles
  const productos = [
    {id:1, nombre: 'Laptop Gaming', precio:9500, imagen: '💻'},
    {id:2, nombre: 'Celular Poco X10', precio:6350, imagen: '📱'},
    {id:3, nombre: 'Auriculares', precio:180, imagen: '🎧'},
    {id:4, nombre: 'Tablet', precio:7560, imagen: '🎛'},

  ];

  const agregarAlCarrito = (producto) => {
    setCarrito(prevCarrito => {
    const itemExistente = prevCarrito.find(item => item.id === producto.id);
    if (itemExistente){
      return prevCarrito.map(item =>
        item.id === producto.id
        ? {...item, cantidad: item.cantidad+1 }
        : item
      );
    }
     // Agregar nuevo producto con cantidad 1
    return [...prevCarrito, { ...producto, cantidad: 1 }];
    });
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(prevCarrito => prevCarrito.filter(item => item.id !== id));
  };

  const actualizarCantidad = (id,nuevaCantidad) => {
    if(nuevaCantidad <= 0) {
      eliminarDelCarrito(id);
      return;
    }
    setCarrito(prevCarrito =>
        prevCarrito.map(item=>
        item.id === id ? {...item, cantidad:nuevaCantidad} : item          
        )
    );
  };
  const appStyle ={
    background: colores[colorFondo] || colores.gradient,
    fontSize: tamañoLetra === 'medium' ? '16px':
              tamañoLetra === 'pequeño' ? '12px':
              tamañoLetra === 'grande' ? '20px': '25px',
    minHeight: '100vh', 
    transition: 'all 0.4s ease'
  };

  return (
    <div className="App" style={appStyle}>
       {/* <Formulario/>
        <br></br>
        <Click2 titulo="Click de preferencia en Tik Tok"></Click2>
        <Click2 titulo="Click para calificarlo"></Click2>
        <Click2 titulo="Click de calidad de opnion"></Click2>
        */}
        <ControlesTema/>
        <header className="app-header">
          <h1>Tienda Online</h1>
          <p>Elija su producto</p>
        </header>
        <div className="container">
            <section className="productos-seccion">
                <h2>Producto Disponible</h2>
                <div className="productos-grid">
                { productos.map(producto => (
                  <Producto 
                    key={producto.id}
                    producto={producto}
                    onAgregar={agregarAlCarrito}   
                 />
                ))}
                </div>
            </section>
            {/* seleccion del carrito*/}
            <section className='carrito-seccion'>
              <Carrito
                items={carrito}
                onEliminar={eliminarDelCarrito} 
                onActualizarCantidad={actualizarCantidad}
              />
            </section>
        </div>
    </div>
  );
};

function App(){
  return (
    <TemaProvider>
      <AppContent />
    </TemaProvider>
  );
}

export default App;
