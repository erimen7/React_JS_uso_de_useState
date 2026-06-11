import React from 'react'
import { useState } from 'react'

const Click2 = (props) => {
 const [contador, setContador] = useState(0);

 const incrementar = () => {
    setContador(contador + 1 );
 }

  return (
    <div style={{ padding:'15px', border:'1px solid #ee243', borderRadius:'5px'}}>
         <h3> {props.titulo} </h3>
         <p>Contador de clicks: <strong>{ contador }</strong></p>
         <button onClick={incrementar}> Registrar clicks</button>
    </div>
  )
}

export default Click2