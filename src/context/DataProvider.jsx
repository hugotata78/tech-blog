import { createContext, useEffect, useState } from 'react'
import { getPosts, getPost } from '../api/posts.api'

export const DataContext = createContext()


import React from 'react'

export const DataProvider = (props) => {

    const [posts, setPosts] = useState([])

    const getPostById = async (id)=>{
        const post = await getPost(id)
        return post
    }
    useEffect(() => {
        const loadPosts = async () => {
            const results = await getPosts()
            setPosts(results.data)
        }
        loadPosts()
    },)

    const value = {
        posts: [posts],
        getPostById: getPostById
    }
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}
