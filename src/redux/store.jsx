import {createStore, combineReducers} from 'redux'

import countReducer from './countReducer'
import cartReducer from './cartReducer'

const rootReducers = combineReducers({
    cartReducer,
    countReducer
})

const store = createStore(rootReducers)

export default store