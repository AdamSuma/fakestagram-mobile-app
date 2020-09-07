INITIAL_STATE = { isSigned: false, errorMessage: '' }

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case 'signin':
            return {isSigned: true, errorMessage: '', token: action.payload}
        case 'add_error':
            return {isSigned: false, token: '', errorMessage: action.payload}
        default:
            return state
    }
}