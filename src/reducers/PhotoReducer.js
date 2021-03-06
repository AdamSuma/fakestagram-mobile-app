INITIAL_STATE = { user: {}, photos: [], isLoading: true, error: '' }

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case 'get_photos':
            return {photos: action.payload.photos, isLoading: false, error: '', user: action.payload.user}
        case 'get_account':
            return {...state, photos_home: action.payload.photos , isLoading: false, error: ''}
        case 'add_photos_error':
            return {photos: [], isLoading: false, error: action.payload }
        default:
            return state
    }
}