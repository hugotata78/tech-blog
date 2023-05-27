import axios from 'axios'

const base_url = axios.create({
    baseURL: import.meta.env.VITE_API_URL
}
)

export const getPosts = () => base_url.get('/posts/')
export const getPost = (id)=> base_url.get(`/posts/${id}`)