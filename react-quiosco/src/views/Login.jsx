import React, { createRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Alerta from '../components/Alerta';
import { useAuth } from '../hooks/useAuth';
import Spinner from "../components/Spinner"

function Login() {


  const [cargando, setCargando] = useState(false);
  const emailRef = createRef();
  const passwordRef = createRef();

  const [errores, setErrores] = useState([])
  const { login } = useAuth({
    middleware: 'guest',
    url: '/'
  })

  const handleSubmit = async e => {

    e.preventDefault()
    const datos = {

      email: emailRef.current.value,
      password: passwordRef.current.value,

    }

    setCargando(true);
    await login(datos, setErrores);
    setCargando(false);



  }


  return (
    <>
      <h1 className='text-4xl font-black'> Iniciar sesión </h1>
      <p>Para crear un pedido debes iniciar sesión</p>

      <div className=' bg-white shadow-md rounded-md mt-10 px-5 py-10'>

        <form action="" onSubmit={handleSubmit} noValidate='off'>

          {errores ? errores.map((error, i) =>
            <Alerta key={i}> {error} </Alerta>
          ) : null}

          <div className="mb-4">

            <label htmlFor="email"
              className=' text-slate-800'>
              Email: </label>
            <input
              type="email"
              id="email"
              className=' mt-2 w-full p-3 bg-gray-50'
              name='email'
              placeholder='Tu Email'
              ref={emailRef} />

          </div>

          <div className="mb-4">

            <label htmlFor="password"
              className=' text-slate-800'>
              Pasword: </label>
            <input
              type="password"
              id="password"
              className=' mt-2 w-full p-3 bg-gray-50'
              name='password'
              placeholder='Tu Password'
              ref={passwordRef} />

          </div>



          <input type="submit" value="Inciar sesión" className=' bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase
          font-bold cursor-pointer' />



        </form>

          {cargando && <Spinner />}
        
      </div>

      <nav className=' mt-5'>
        <Link to="/auth/registro">
          ¿No tienes una cuenta? Crea una
        </Link>
      </nav>
    </>
  )
}

export default Login