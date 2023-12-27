import React from 'react'

import { Categoria } from './Categoria'
import useQuiosco from '../hooks/useQuiosco'
import { useAuth } from '../hooks/useAuth'


function Sidebar() {
    const { categorias } = useQuiosco()
    const {logout, user} = useAuth({
        middleware: 'auth'
    })

  return (
    <aside className=' md:w-72'>
        <div className="p-4">
            <img src="img/logo.svg" 
                className='w-40' alt="Icono" />
        </div>

        <p className="my-10 text-xl text-center">Hola: {user?.name}</p>

        <div className="mt-10">
            {categorias.map( categoria => (
                <Categoria key={categoria.id} 
                    categoria = {categoria}
                />  
            ))}
        </div>

        <div className='my-5 py-5'>
            <button type="button" className='text-center truncate w-full bg-red-500 p-3 font-bold text-white' onClick={logout}>
                Cancelar orden
            </button>
        </div>

    </aside>
  )
}

export default Sidebar