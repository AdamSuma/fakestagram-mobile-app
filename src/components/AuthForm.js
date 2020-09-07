import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AuthForm = ({ errorMessage, onSubmit, submitButtonText, navigate_to }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            <Spacer />
            <Input
                label="Username"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer />
            <Input
                secureTextEntry
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null }
            <Spacer>
                <Button title={submitButtonText} 
                onPress={() => {onSubmit({ username, password })} }
                />
            </Spacer>
            { navigate_to ?
            <TouchableOpacity onPress={navigate_to}>
                <Text style={{ fontSize:12, color: 'blue', textAlign:"center" }}>Don't have an account? Sign Up</Text>
            </TouchableOpacity> : null
            }   
        </>
    )
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft:15,
        marginTop:15,
      },
});

export default AuthForm;