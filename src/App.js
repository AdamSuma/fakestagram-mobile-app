import React from 'react'
import { Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import Navigator from './navigation/navigator'
import ReduxThunk from 'redux-thunk'
import { NavigationActions } from '@react-navigation/native'

const App = () => {
    return (
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
            <Navigator />
        </Provider>
    )
}

export default App;