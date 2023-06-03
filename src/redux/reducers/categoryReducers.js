import { CATEGORIES, CATEGORY } from "../actions/categoryAction";

const initialState = {
    all_categories : [],
    category : {},
}

const categoryReducers = (state=initialState, action)=>{
    switch(action.type){
        case CATEGORIES:
            return{
                ...state,
                all_categories: action.payload,
            }
        case CATEGORY:
            return{
                ...state,
                category:action.payload,
            }
        default:
            return state
    }
}

export default categoryReducers