import { UPDATE_COMMENT } from "../actions/commentAction";

const initialState = {
    update_comment:{}
}

const commentReducers = (state=initialState, action)=>{
    switch(action.type){
        case UPDATE_COMMENT:
            return{
                ...state,
                update_comment:action.payload
            }
        default:
            return state
    }
}

export default commentReducers