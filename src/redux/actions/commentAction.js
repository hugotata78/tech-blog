export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

import axios from "axios"

const base_url = axios.create({
    baseURL:import.meta.env.VITE_API_URL
})

export const updateCommentAction = (id,data,token)=>{
    return async(dispatch)=>{
        try {
            const results = await base_url.put(`/comments/${id}`, data,{
                headers: {
                    'Authorization': `JWT ${token}` 
                }
              })
            dispatch({
                type:UPDATE_COMMENT,
                payload:results.data
            })
        } catch (error) {
            
        }
    }
}