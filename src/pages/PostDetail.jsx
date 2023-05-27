import React, { useEffect, useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { getPost } from '../redux/actions/postsActions'

export const PostDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const post = useSelector(state=>state.postReducer.post)
    

    useEffect(() => {
        dispatch(getPost(id))
    }, [dispatch,id])
    return (
        <div>
            <h3>{post && post.title}</h3>
            <p>{post && post.body}</p>
            <h4>Categorias relacionadas</h4>
            <ul>
            {post.categories && post.categories.map(cateroy=>(
                <li>{cateroy.name}</li>
                ))
                }
            </ul>
            <h4>Comentarios</h4>
            <ul>
            {post.comments && post.comments.map(comment=>(
                <li>{comment.comment}</li>
                ))
                }
            </ul>
            <Link to='/'>Volver</Link> 
        </div>
    )
}
