import { applyMiddleware, legacy_createStore as createStore} from 'redux'
import { rootReducers } from './reducers/rootReducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const store = createStore(rootReducers, 
    composeWithDevTools(
        applyMiddleware(thunk)
    )
    )

export {store}