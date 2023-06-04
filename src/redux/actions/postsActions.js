import axios from 'axios'

const base_url = axios.create({
    baseURL: import.meta.env.VITE_API_URL
}
)

export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GET_POST = 'GET_POST'
export const CREATE_COMMENT = 'CREATE_COMMENT'


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
            const results = await base_url.get(`/posts/${id}/`)
            dispatch({
                type:GET_POST,
                payload:results.data
            })
        } catch (error) {
            
        }
    }
}

export const createComment = (id, data, token)=>{
    console.log(token)
    return async(dispatch)=>{
        try {
            const results = await base_url.post(`/posts/${id}/comment/`, data,{
                headers: {
                    'Authorization': `JWT ${token}` 
                }
              })
            dispatch({
                type:CREATE_COMMENT,
                payload:results.data
            })
        } catch (error) {
            
        }
    }
}