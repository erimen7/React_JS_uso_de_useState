import React, {createContext, useState, useContext, Children} from 'react'

const TemaContext = createContext();

// hook personalizado para usar el contexto
export const useTema = () => {
  const context = useContext(TemaContext);
  if(!context){
    throw new Error('debe usarse dentro de la pagina');
  }  
  return context;
    
};

// envolver la aplicacion Provider
export const TemaProvider = ({ children}) => {
    // cambiar el tema y cambiar el tamaño de letra
    const [colorFondo, setColorFondo] =useState('gradient');
    const [tamañoLetra, setTamañoLetra] =useState('medium');

    const colores ={
        gradient: 'linear-gradient(135deg, #a0b0f5 0%, #363537 100%)',
        claro: '#f0f4f8',
        oscuro: '#1a1a2e',
        azul: '#1a98f3',
        verde: '#69f174',
        rosa: '#e098b0'
    };

    const tamaños ={
        pequeño: '12px',
        medium: '16px',
        grande: '20px',
        extragrande: '24px'
    };

    const cambiarColorFondo = (color) =>{
        setColorFondo(color);
    };

    const cambiarTamañoLetra = (tamaño)=>{
        setTamañoLetra(tamaño);
    };

    const value = {
        colorFondo, tamañoLetra, cambiarColorFondo, cambiarTamañoLetra, colores, tamaños
    };
    return(
        <TemaContext.Provider value={value}>
            {children}
        </TemaContext.Provider>
    );
};



