import React from 'react'

const Formulario = () => {

    const alertar= (e) => {
        alert('esta es una prueba para ver que funciona...',e);
    };

  return (
    <div>
        <h2> FORMULARIO DE DATOS</h2>
        <form>
            <label for="nombre"> Nombre </label>
            <input type="text" name="nombre1" required="true" />
            <br></br>
            <label for="apellido"> Apellidos </label>
            <input type="text" name="apellido1" required="true" />
            <br></br>
            <button type="button" id="boton1" onClick={alertar}> GENERAR</button>
        </form>

    </div>
  )
}

export default Formulario