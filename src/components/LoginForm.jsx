import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../redux/actions/userActions'

export const LoginForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const login = useSelector(state=>state.userReducers.login)
    const { register, handleSubmit, formState: {
        errors
    } } = useForm()

    const loginAction = handleSubmit( data =>{
        dispatch(userLogin(data))
        navigate('/')
    })
    return (
        <div>
            <form action="" onSubmit={loginAction}>
                <input
                    type="text"
                    placeholder='Nombre de usuario'
                    {...register('username', { required: true })}
                />
                <input
                    type="password"
                    placeholder='Contraseña'
                    {...register('password', { required: true })}
                />
                <input
                    type="submit"
                    value="Enviar"
                    className='bg-indigo-500 p-3 rounded-lg block w-full mt-3 hover:cursor-pointer'
                />
            </form>
        </div>
    )
}
