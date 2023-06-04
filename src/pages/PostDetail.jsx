import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createComment, getPost } from '../redux/actions/postsActions'
import jwtDecode from 'jwt-decode'
import { useForm } from 'react-hook-form'

export const PostDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const post = useSelector(state => state.postReducer.post)
    const [token, setToken] = useState(null)
    const { register, handleSubmit, formState: {
        errors
    } } = useForm()

    const newComment = handleSubmit(data=>{
        if (token) {
            dispatch(createComment(id, data, token))
        }else{
            console.log('No hay token')
        }
    })
    useEffect(() => {
        dispatch(getPost(id))
    }, [dispatch, id])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('login'))
        if (data) setToken(data.access)
    }, [])
    return (
        <div>
            <h3>{post && post.title}</h3>
            <h5>Iniciado por: {post.owner}</h5>
            <p>{post && post.body}</p>
            <h4>Categorias relacionadas</h4>
            <ul>
                {post.categories && post.categories.map(cateroy => (
                    <li key={cateroy.id}>{cateroy.name}</li>
                ))
                }
            </ul>
            <h4>Comentarios</h4>
            <ul>
                {post.comments && post.comments.map(comment => (
                    <li key={comment.id}>{comment.comment}</li>
                ))
                }
            </ul>
            <form action="" onSubmit={newComment}>
                <textarea
                    cols="30"
                    rows="10"
                    {...register('comment', {required:true})}
                >
                </textarea>
                <input type="submit" value="Enviar" />
            </form>
            <Link to='/'>Volver</Link>
        </div>
    )
}
