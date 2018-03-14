import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from '../../components/PlaceInput/PlaceInput';
import { addPlace } from '../../store/actions/index';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import imagePlaceHolder from '../../assets/beach.jpg';

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
          <View style={styles.placeholder}>
            <Image source={imagePlaceHolder} style={styles.previewImage} />
          </View>
          <View style={styles.button}>
            <Button title="Pick Image" />
          </View>
          <View style={styles.placeholder}><Text>Map</Text></View>
          <View style={styles.button}>
            <Button title="Locate Me" />
          </View>
          <DefaultInput placeholder="Place Name" />
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
  placeholder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    width: '80%',
    height: 120
  },
  button: {
    margin: 8
  },
  previewImage: {
    width: '100%',
    height: '100%'
  }
});

mapDispatchToProps = dispatch => {
  return{
    onAddPlace: (placeName) => dispatch(addPlace(placeName))
  };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
