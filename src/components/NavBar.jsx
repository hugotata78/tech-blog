import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import jwt from 'jwt-decode'
import { useDispatch } from 'react-redux'





export const NavBar = () => {

    const [token, setToken] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    

    const logoutAction = () => {
        localStorage.removeItem('login')
        navigate('/')
    }

    useEffect(() => {
        const results = JSON.parse(localStorage.getItem('login'))
        results ? setToken(jwt(results.access)) : setToken(null)
    }, [])
    return (
        <div className='flex justify-between py-3'>
            <Link className='font-bold text-3-xl mb-4' to='/'><h1>Inicio</h1></Link>
            {
                token && <button className='bg-indigo-500 px-3 py-2 rounded-lg' onClick={logoutAction}>
                    Cerrar Sesión
                </button>}
            {
                !token && <button className='bg-indigo-500 px-3 py-2 rounded-lg'>
                    <Link to='/login'>Iniciar Sesión</Link>
                </button>
            }
        </div>
    )
}
