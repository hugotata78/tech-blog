import React, { useEffect, useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DataContext } from '../context/DataProvider'
import { PostCard } from '../components/PostCard'
import { getAllPosts } from '../redux/actions/postsActions'

export const ContainerPostList = () => {
  // const value = useContext(DataContext)
  // const [posts] = value.posts
  const dispatch = useDispatch()
  const posts = useSelector(state=>state.postReducer.all_posts)

  useEffect(()=>{
    dispatch(getAllPosts())
  },[dispatch])

  console.log(posts)
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
