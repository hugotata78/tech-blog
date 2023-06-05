import axios from "axios";


const base_url = axios.create({
    baseURL: import.meta.env.VITE_API_URL
}
)

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const userLogin = (data) => {
    return async (dispatch) => {
        try {
            const results = await base_url.post('/users/auth/token/', data)
            localStorage.setItem('login', JSON.stringify(results.data))
            dispatch({
                type: LOGIN,
                payload: results.data
            })
        } catch (error) {

        }
    }
}

export const userLogout = (token) => {
    return async (dispatch) => {
        const results = await base_url.post('/users/auth/logout/', { 'refresh': token })
        localStorage.removeItem('login')
        dispatch({
            type: LOGOUT,
            payload: results.data
        })
    }
}