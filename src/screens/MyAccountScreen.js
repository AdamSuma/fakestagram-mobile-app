import React, { useEffect } from 'react'
import { Text, View, StyleSheet, Image,  SafeAreaView, ActivityIndicator } from 'react-native'
import {connect} from 'react-redux'
import { getAccount } from '../actions'


const MyAccountScreen = ({ getAccount, user, photos, error, isLoading }) => {
    useEffect( () => {
        getAccount()
        return () => {
            console.log("unmount");
        }
    }, [])
    return(
        <SafeAreaView>
            { user ? <View style={styles.header}>
                        <Image source={{uri: `http://localhost:8000${user.profile_picture}`}} style={styles.profile_picture} />
                        <Text style={styles.username}>{user.username}</Text>
                    </View>
            : <ActivityIndicator large /> }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    profile_picture: {
        width: 40,
        height: 40,
        borderRadius: 30,
        margin: 10
    },
    username: {
        fontSize: 20,
        alignSelf: "center",
    }
})

const mapDispatchToProps = (dispatch) => {
    return { 
        getAccount: () => dispatch(getAccount()),
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.photo.user,
        photos: state.photo.photos,
        error: state.photo.error,
        isLoading: state.photo.isLoading
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAccountScreen)