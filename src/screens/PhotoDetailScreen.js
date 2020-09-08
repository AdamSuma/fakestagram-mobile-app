import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Photo from '../components/Photo'

const PhotoDetailScreen = ({ route }) => {
    const { username, profile_picture, image } = route.params
    return(
        <Photo
            username={username}
            profile_picture={profile_picture}
            image={image}
        />
    )
}

const styles = StyleSheet.create({})

export default PhotoDetailScreen