import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCategory } from '../redux/actions/categoryAction'
import { PostCard } from '../components/PostCard'

export const CategoryDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const category = useSelector(state => state.categoryReducers.category)

  useEffect(() => {
    dispatch(getCategory(id))
  }, [dispatch,id])
  return (
    <div>
      <h3>{category.name}</h3>
      <h5>{category.description}</h5>
      <h6>Post relacionados</h6>
      <div className='grid grid-cols-3 gap-3'>
        {
          category.posts && category.posts.map(post => (
            <PostCard post={post} key={post.id} />
          ))
        }
      </div>
    </div>
  )
}
