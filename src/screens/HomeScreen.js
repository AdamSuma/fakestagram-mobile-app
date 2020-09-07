import React, { useEffect } from 'react'
import { Text, View, StyleSheet, Button, FlatList, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import { getPhotos } from '../actions'
import Photo from '../components/Photo'


const HomeScreen = ( { getPhotos, error, isLoading, photos } ) => {
    useEffect(() => {
        getPhotos();
        return () => {
            console.log("unmount");
        }
    }, [])
    return(
        <SafeAreaView>
            <FlatList 
                data={photos} 
                renderItem={({ item }) => {
                    return(
                        <Photo
                            username={item.userprofile.username}
                            profile_picture={item.userprofile.profile_picture}
                            image={item.image}
                        />
                    )
                }}
                keyExtractor={(item) => item.id}
            /> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})

const mapDispatchToProps = (dispatch) => {
    return { 
        getPhotos: () => dispatch(getPhotos()),
    }
}

const mapStateToProps = state => {
    return { error: state.photo.error, isLoading: state.photo.isLoading, photos: state.photo.photos,  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)