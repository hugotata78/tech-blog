import React from 'react'
import { Link } from 'react-router-dom'


export const PostCard = ({ post }) => {
    return (
        <div className='bg-zinc p-3 hover:bg-zinc-700 hover:cursor-pointer'>
            <Link to={`/posts/${post.id}`}>
                <h3>{post.title}</h3>
                <h5>{post.owner}</h5>
                <p>{post.body}</p>
            </Link>
        </div>
    )
}
