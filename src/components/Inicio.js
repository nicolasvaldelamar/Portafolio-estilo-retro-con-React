import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div>
      <h1>
        Hola, soy Nicolás Valdelamar y soy Desarrollador Full Stack en Cartagena, 
        y ofrezco mis servicios de programacion y desarrollo de software.
      </h1>
      <h2>
          Te ayudo a crear tu solucion de software ya sea web,
          mobile o desktop y tener mayor productividad. <Link to='/contacto'>Contacta conmigo</Link>
      </h2>
      <section className='lasts-works'>
        <h2>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web.</p>
        <div className='works'>

        </div>
      </section>
    </div>
  )
}
