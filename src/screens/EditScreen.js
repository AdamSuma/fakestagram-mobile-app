
import React from 'react'
import { View, Text, Image, Button } from 'react-native'
import { Input } from 'react-native-elements'
import ImagePicker from 'react-native-image-picker'
import { connect } from 'react-redux'
import { editProfile } from '../actions'

class EditScreen extends React.Component {
  state = {
    photo: {uri: this.props.route.params.image},
    bio: this.props.route.params.bio,
    initial: true
  }

  handleOnPress = () => {
        let form = new FormData()
        
        form.append('bio', this.state.bio)
        this.state.initial ? form.append('profile_picture', null) : form.append('profile_picture', {
            uri: this.state.photo.uri, 
            name: 'upload.jpg', 
            type: 'multipart/form-data'
        })
        this.props.onSubmit(form)
  }

  handleChoosePhoto = () => {
    const options = {
      noData: true,
      mediaType:'photo'
    }
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response, initial: false })
      }
    })
  }

  render() {
    const { photo, bio, initial } = this.state
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {initial ? 
            <Image source={{ uri: `http://localhost:8000${photo.uri}` }} style={{ width: 300, height: 300 }} /> 
            : <Image source={{ uri: photo.uri }} style={{ width: 300, height: 300 }} />
        }
        <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
        <Input
            value={bio}
            onChangeText={(txt) => this.setState({bio: txt})}
            autoCorrect={false}
            placeholder="Bio"
        />
        <Button title="Edit" onPress={this.handleOnPress} />  
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
    return { onSubmit: (form) => dispatch(editProfile(form))}
}

export default connect(null, mapDispatchToProps)(EditScreen)