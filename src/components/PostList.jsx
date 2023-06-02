import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostCard } from './PostCard'
import { getAllPosts } from '../redux/actions/postsActions'

export const PostList = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.postReducer.all_posts)

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])
    return (
        <div className='grid grid-cols-3 gap-3'>
            {
                posts && posts.map(post => (
                    <PostCard post={post} key={post.id} />
                ))
            }
        </div>
    )
}
