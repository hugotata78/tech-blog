import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import jwt from 'jwt-decode'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories, getCategory } from '../redux/actions/categoryAction'
import { userLogout } from '../redux/actions/userActions'





export const NavBar = () => {

    const [token, setToken] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const categories = useSelector(state=>state.categoryReducers.all_categories)

    

    const logoutAction = () => {
        const data = JSON.parse(localStorage.getItem('login'))
        dispatch(userLogout(data.refresh))
        navigate('/')
    }

    useEffect(() => {
        const results = JSON.parse(localStorage.getItem('login'))
        results ? setToken(jwt(results.access)) : setToken(null)
    },[])

    useEffect(()=>{
        dispatch(getCategories())
    }, [dispatch])
    return (
        <div className='flex justify-between py-3'>
            <Link className='font-bold text-3-xl mb-4' to='/'><h1>Inicio</h1></Link>
            {
                categories && categories.map(category =>(
                    <Link to={`/category/${category.id}`} key={category.id}>{category.name}</Link>
                ))
            }
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
