import React from 'react'
import { Link } from 'react-router-dom'


export const PostCard = ({ post }) => {
    return (
        <div>
            <Link to={`/posts/${post.id}`}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </Link>
        </div>
    )
}
