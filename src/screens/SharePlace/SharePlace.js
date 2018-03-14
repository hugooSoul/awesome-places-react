import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from '../../components/PlaceInput/PlaceInput';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';
import { addPlace } from '../../store/actions/index';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';

class SharePlaceScreen extends Component {

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {

    console.log(event);
    if (event.type == 'NavBarButtonPress') {
      if(event.id === 'sideDrawerToggle') {
        this.props.navigator.toggleDrawer({
          side: 'left',
          animated: true
        });
      }
    }

  }

  placesAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  }

  render () {
    return(
      <ScrollView>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Share a place with us!</HeadingText>
          </MainText>

          <PickImage />
          <PickLocation />
          <PlaceInput />
          
          <View style={styles.button}>
            <Button title="Share the place" />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
});

mapDispatchToProps = dispatch => {
  return{
    onAddPlace: (placeName) => dispatch(addPlace(placeName))
  };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
