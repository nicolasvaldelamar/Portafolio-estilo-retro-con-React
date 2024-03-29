import React from 'react'
import { trabajos } from '../data/trabajos'
import { Link } from 'react-router-dom'


export const Portafolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Portafolio</h1>
      <section className='works'>
      {
        trabajos.map(trabajo => {
         return(
          <article key={trabajo.id} className='work-item'>
            <div className='mask'>
              <img src={'https://proximahost.es/blog/wp-content/uploads/2021/06/Redes-sociales.jpg'} alt='img'/>
            </div>
            <span>{trabajo.categorias}</span>
            <h2><Link to={"/proyecto/"+trabajo.id}>{trabajo.nombre}</Link></h2>
            <h3>{trabajo.tecnologias}</h3>
          </article>
         ) 
        })
      }
      </section>
      

    </div>
  )
}
