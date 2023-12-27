import React from 'react'

import Producto from '../components/Producto'
import useQuiosco from '../hooks/useQuiosco'
import useSWR from 'swr'
import clienteAxios from '../config/axios'
import Spinner from "../components/Spinner"


function Inicio() {

  const  { categoriaActual } = useQuiosco()


  // Consulta SWR
  const fetcher = () => clienteAxios('/api/productos').then(data => data.data )
  const { data, error, isLoading } = useSWR('/api/productos', fetcher, {
    refreshInterval: 1000
  })

  if(isLoading) return <Spinner />;
  const productos = data.data.filter(producto => producto.categoria_id === categoriaActual.id)

  return (
    <>
      <h1 className='text-4xl font-black'>
        {categoriaActual.nombre}
      </h1>
      <p className='text-2xl my-10'>Elige y personaliza tu pedido</p>
      <div className='grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
        {productos.map( producto => (
          <Producto 
            key={producto.id}
            producto={producto}
            botonAgregar = {true}
          />
        ))}
      </div>
    </>
  )
}

export default Inicio