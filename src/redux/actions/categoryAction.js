import axios from 'axios'

export const CATEGORIES = 'CATEGORIES'
export const CATEGORY = 'CATEGORY'

const base_url = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export const getCategories = ()=>{
    return async (dispatch)=>{
        try {
            const results = await base_url.get('/categories/')
            dispatch({
                type:CATEGORIES,
                action: results.data
            })
        } catch (error) {
            
        }
    }
}

export const getCategory = (id)=>{
    return async(dispatch)=>{
        try {
            const results = await base_url.get(`/categories/${id}/`)
            dispatch({
                type:CATEGORY,
                payload: results.data
            })
        } catch (error) {
            
        }
    }
}