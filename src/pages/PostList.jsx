import React, {useEffect, useState } from 'react'
import axios from 'axios'

export const PostList = () => {

    const [posts,setPosts] = useState()
  const getPost = ()=>{
    return axios.get('http://127.0.0.1:8000/posts/')
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
