import React from 'react'
import useQuiosco from '../hooks/useQuiosco'


export const Categoria = ({ categoria }) => {

  const { handleClickCategoria, categoriaActual } = useQuiosco()
  const { nombre, id, icono } = categoria
  return (
    <button
      className={`${categoriaActual.id === id ? "bg-amber-400" : "bg-white"
        } flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}
      type="button"
      onClick={() => handleClickCategoria(id)}
    >
      <img src={`/img/icono_${icono}.svg`} className="w-12" alt="Icono" />
      <span className="text-lg font-bold truncate">{nombre}</span>
    </button>
  )
}
