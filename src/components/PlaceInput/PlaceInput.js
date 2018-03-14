import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';

class PlaceInput extends Component {

  state = {
    placeName: ''
  }

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  }

  placeSubmitHandler = () => {
    if( this.state.placeName.trim() === "" ) {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);
    console.log("Place Added");
  }

  render() {
    return (
      <DefaultInput
        placeholder="An awesome place"
        value={this.state.placeName}
        onChangeText={this.placeNameChangedHandler} />
    );
  }
}

export default PlaceInput;
