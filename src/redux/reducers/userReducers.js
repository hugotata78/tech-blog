import { LOGIN, LOGOUT } from '../actions/userActions'

const initialState = {
    login: {},
    logout: {},
}

const userReducers = (state=initialState, action)=>{
    switch(action.type){
        case LOGIN:
            return{
                ...state,
                login: action.payload,
            }
        case LOGOUT:
            return{
                ...state,
                logout:action.payload
            }
        default:
            return state
    }
}

export default userReducers