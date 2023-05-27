import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostCard } from '../components/PostCard'
import { getAllPosts } from '../redux/actions/postsActions'

export const ContainerPostList = () => {
  
  const dispatch = useDispatch()
  const posts = useSelector(state=>state.postReducer.all_posts)

  useEffect(()=>{
    dispatch(getAllPosts())
  },[dispatch])

  return (
    <div>
      <ul>
        {
          posts && posts.map(post => (
            <li key={post.id}>
              <PostCard post={post} />
            </li>
          ))
        }
      </ul>
    </div>
  )
}
