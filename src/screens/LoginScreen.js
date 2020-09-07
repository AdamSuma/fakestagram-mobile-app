import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux'
import { loginUser } from '../actions'
import AuthForm from '../components/AuthForm'

const LoginScreen = ({ navigation, onSubmit, errorMessage }) => {
    return(
        <View>
            <AuthForm submitButtonText="Log In" navigate_to={ () => navigation.navigate('SignUp')} onSubmit={onSubmit} errorMessage={errorMessage} />
        </View>
    )
}

const mapDispatchToProps = (dispatch) => {
    return { 
        onSubmit: ({username, password}) => dispatch(loginUser({username, password})),
    }
}

const mapStateToProps = state => {
    return { errorMessage: state.auth.errorMessage }
}

const styles = StyleSheet.create({})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)