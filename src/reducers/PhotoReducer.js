INITIAL_STATE = { user: {}, photos: [], isLoading: true, error: '' }

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case 'get_photos':
            return {photos: action.payload, isLoading: false, error: ''}
        case 'get_account':
            return {photos: action.payload.photos, user: action.payload.user, isLoading: false, error: ''}
        case 'add_photos_error':
            return {photos: [], isLoading: false, error: action.payload }
        default:
            return state
    }
}