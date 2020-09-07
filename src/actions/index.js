import AsyncStorage from '@react-native-community/async-storage'
import fakeApi from '../api/fakestagram'

export const loginUser = ({username, password}) => {
    return async dispatch => {
        try{
            const response = await fakeApi.post('auth/', { username, password });
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({type: 'signin', payload: response.data.token})
        } catch(err){
            dispatch({type: 'add_error', payload: "Something went wrong"})
        }
    }
}

export const getPhotos = () => {
    return async dispatch => {
        try{
            const response = await fakeApi.get('api/photos/request_photos/')
            dispatch({type: 'get_photos', payload: response.data.photos})
        } catch(err){
            dispatch({type: 'add_photo_error', payload: "Could not connect to server, check internet connection"})
        }
    }
}

export const getAccount = () => {
    return async dispatch => {
        try{
            const response = await fakeApi.get('api/photos/home/')
            console.log(response.data)
            dispatch({type: 'get_account', payload: response.data })
        } catch(err){
            dispatch({type: 'add_photo_error', payload: "Could not connect to server, check internet connection"})
        }
    }
}