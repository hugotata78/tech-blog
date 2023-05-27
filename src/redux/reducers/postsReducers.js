import { GET_POST, GET_ALL_POSTS} from '../actions/postsActions'

const initialState = {
    all_posts : [],
    post: {}
}

const postReducer = (state=initialState,action) =>{
    switch(action.type){
        case GET_ALL_POSTS:
            return {
                ...state,
                all_posts: action.payload,
            }
        case GET_POST:
            return{
                ...state,
                post:action.payload
            }
        default:
            return state
    }
}

export default postReducer