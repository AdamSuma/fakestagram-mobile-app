import React, { useEffect } from 'react'
import { Text, View, StyleSheet, Image,  SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import {connect} from 'react-redux'
import { getAccount } from '../actions'


const MyAccountScreen = ({ getAccount, user, photos, error, isLoading, navigation }) => {
    useEffect( () => {
        getAccount()
        return () => {
            console.log("unmount");
        }
    }, [])
    return(
        <SafeAreaView>
            <View style={{ borderBottomColor: 'lightgrey', borderBottomWidth: 1, backgroundColor: 'white'}}>
                <View style={styles.header}>
                    <Image source={{uri: `http://localhost:8000${user.profile_picture}`}} style={styles.profile_picture} />
                    <Text style={styles.username}>{user.username}</Text>
                </View>
                <Text style={{ fontSize:15, marginLeft: 15, marginBottom:20}}>{user.bio}</Text>
            </View>
            <FlatList 
                data={photos} 
                renderItem={({ item }) => {
                    return(
                        <TouchableOpacity onPress={navigation.navigate('PhotoA', {username: user.username, profile_picture: user.profile_picture, image: item.image})}>
                            <Image source={{uri: `http://localhost:8000${item.image}`}} style={{width:130, height:130, marginLeft:6, marginTop:6}} />
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
            /> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row'
    },
    profile_picture: {
        width: 70,
        height: 70,
        borderRadius: 30,
        margin: 10
    },
    username: {
        fontSize: 25,
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
        photos: state.photo.photos_home,
        error: state.photo.error,
        isLoading: state.photo.isLoading
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAccountScreen)