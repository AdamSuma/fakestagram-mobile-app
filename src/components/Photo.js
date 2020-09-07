import React from 'react'
import { SafeAreaView, View, Image, Text, StyleSheet } from 'react-native'

const Photo = ({image, profile_picture, username}) => {
    return (
        <SafeAreaView>
            <View style={styles.header}>
                <Image source={{uri: `http://localhost:8000${profile_picture}`}} style={styles.profile_picture} />
                <Text style={styles.username}>{username}</Text>
            </View>
            <Image source={{uri: `http://localhost:8000${image}`}} style={{width:420, height:420}} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
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

export default Photo