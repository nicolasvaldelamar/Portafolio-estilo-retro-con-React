import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className='home'> 
      <h1>
        Hola, soy Nicolás Valdelamar y soy <strong>Desarrollador Full Stack</strong> en Cartagena, 
        y ofrezco mis servicios de <strong>programacion</strong> y desarrollo de software.
      </h1>
      <h2>
          Te ayudo a crear tu solucion de software ya sea web,
          mobile o desktop y tener mayor productividad. <Link to='/contacto'>Contacta conmigo</Link>
      </h2>
      <section className='lasts-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web.</p>
        <div className='works'>

        </div>
      </section>
    </div>
  )
}
