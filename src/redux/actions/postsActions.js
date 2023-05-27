import axios from 'axios'

const base_url = axios.create({
    baseURL: import.meta.env.VITE_API_URL
}
)

export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GET_POST = 'GET_POST'


export const getAllPosts = ()=>{
    return async (dispatch)=>{
        try {
            const results = await base_url.get('/posts/')
            dispatch({
                type:GET_ALL_POSTS,
                payload:results.data
            })
        } catch (error) {
            
        }
    }
}

export const getPost = (id)=>{
    return async (dispatch)=>{
        try {
            const results = await base_url.get(`/posts/${id}`)
            dispatch({
                type:GET_POST,
                payload:results.data
            })
        } catch (error) {
            
        }
    }
}