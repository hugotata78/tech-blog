import React, {useEffect, useState } from 'react'
import axios from 'axios'
const base_url = import.meta.env.VITE_API_URL
export const PostList = () => {

    const [posts,setPosts] = useState()
  const getPost = ()=>{
    return axios.get(`${base_url}/posts/`)
  }

  useEffect(()=>{
    const loadPost = async ()=>{
        const results = await getPost()
        setPosts(results.data)
        //console.log(posts.data)
    }
    loadPost()
  },[])
  return (
    <div>
      <ul>
      {
                posts && posts.map(post => (
                    <li key={post.id}>
                      <h3>{post.title}</h3>
                      <p>{post.body}</p>
                    </li>
                ))
            }
      </ul>
    </div>
  )
}
