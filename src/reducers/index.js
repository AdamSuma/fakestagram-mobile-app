import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import PhotoReducer from './PhotoReducer'

export default combineReducers({
    auth: AuthReducer,
    photo: PhotoReducer
})