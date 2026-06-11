import React from 'react'
import {useTema} from '../context/TemaContext';

const ControlesTema = () => {
  const {
    colorFondo, tamañoLetra, cambiarColorFondo, cambiarTamañoLetra, colores, tamaños
  } = useTema();
  
  
    return (
    <div className="controles-tema">
        <div className="control-group">
            <h3>🎨 Tema de Colores</h3>
                <div className="botones-colores">
                    <button 
                        className={`color-btn ${colorFondo === 'gradient' ? 'active' : ''}`}
                        onClick={()=> cambiarColorFondo('gradient')}
                        style ={{ background: 'linear-gradient(135deg, #a0b0f5 0%, #363537 100%)'}}
                    >
                        🌈 Gradient
                    </button>
                     <button 
                        className={`color-btn ${colorFondo === 'claro' ? 'active' : ''}`}
                        onClick={()=> cambiarColorFondo('claro')}
                        style ={{ background: '#f0f4f8', color: '#333'}}
                    >
                        ⬜ Claro
                    </button>
                     <button 
                        className={`color-btn ${colorFondo === 'oscuro' ? 'active' : ''}`}
                        onClick={()=> cambiarColorFondo('oscuro')}
                        style ={{ background: '#1a1a2e', color:'white'}}
                    >
                        🌙 Oscuro
                    </button>
                     <button 
                        className={`color-btn ${colorFondo === 'azul' ? 'active' : ''}`}
                        onClick={()=> cambiarColorFondo('azul')}
                        style ={{ background: '#1a98f3' , color: '#333'}}
                    >
                        🔵 Azul
                    </button>
                        <button 
                        className={`color-btn ${colorFondo === 'verde' ? 'active' : ''}`}
                        onClick={()=> cambiarColorFondo('verde')}
                        style ={{ background: '#69f174' , color: '#333'}}
                    >
                        🟢 Verde
                    </button>
                        <button 
                        className={`color-btn ${colorFondo === 'rosa' ? 'active' : ''}`}
                        onClick={()=> cambiarColorFondo('rosa')}
                        style ={{ background: '#e098b0' , color: '#333'}}
                    >
                        🔴 Rosa
                    </button>
                </div>
        </div>
         <div className="control-group">
             <h3>📏 Tamaño de Letra</h3>
            <div className="botones-tamaño">
                 <button 
                    className={`tamaño-btn ${tamañoLetra === 'pequeño' ? 'active' : ''}`}
                    onClick={()=> cambiarTamañoLetra('pequeño')}
                >
                    Pequeño
                </button>
                <button 
                    className={`tamaño-btn ${tamañoLetra === 'medium' ? 'active' : ''}`}
                    onClick={()=> cambiarTamañoLetra('medium')}
                >
                    Normal
                </button>
                <button 
                    className={`tamaño-btn ${tamañoLetra === 'grande' ? 'active' : ''}`}
                    onClick={()=> cambiarTamañoLetra('grande')}
                >
                    Grande
                </button>
                <button 
                    className={`tamaño-btn ${tamañoLetra === 'extragrande' ? 'active' : ''}`}
                    onClick={()=> cambiarTamañoLetra('extragrande')}
                >
                    Extra grande
                </button>
            </div>
         </div>


    </div>
    
  );
};

export default ControlesTema;