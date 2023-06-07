import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createComment, getPost } from '../redux/actions/postsActions'
import jwtDecode from 'jwt-decode'
import { useForm } from 'react-hook-form'
import { updateCommentAction } from '../redux/actions/commentAction'

export const PostDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const post = useSelector(state => state.postReducer.post)
    const [token, setToken] = useState(null)
    const [dataToken, setDataToken] = useState(null)
    const [idComment, setIdComment] = useState(null)

    const { register, handleSubmit, formState: {
        errors
    }, setValue } = useForm()

    const getData = (e, id, value)=>{
        e.preventDefault()
        setIdComment(id)
        setValue('comment', value)

    }
    const newComment = handleSubmit(data => {
        if (!idComment) {
            dispatch(createComment(id, data, token))
        } else {
            dispatch(updateCommentAction(idComment,data,token))
        }
    })
    useEffect(() => {
        dispatch(getPost(id))
    }, [dispatch, id])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('login'))
        if (data) {
            setToken(data.access)
            setDataToken(jwtDecode(data.access))
            
        }
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
                    <div key={comment.id}>
                        <p>{comment.comment}</p>
                        {dataToken && dataToken.username === comment.owner && <button onClick={e=>getData(e,comment.id, comment.comment)} class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-1">Editar comentario</button>}
                        {dataToken && dataToken.username === comment.owner && <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-1">Borrar comentario</button>}
                    </div>

                ))
                }
            </ul>
            {
                dataToken && <form action="" onSubmit={newComment}>
                    <textarea
                        cols="30"
                        rows="10"
                        {...register('comment', { required: true })}
                    >
                    </textarea>
                    <input class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1" type="submit" value="Enviar" />
                </form>
            }
            <Link to='/'>Volver</Link>
        </div>
    )
}
