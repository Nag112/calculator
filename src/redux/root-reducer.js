import {combineReducers} from 'redux'

import outReducer from './output/output.reducer'

export default combineReducers({
    display:outReducer
})