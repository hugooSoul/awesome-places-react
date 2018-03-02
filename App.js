import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import placeImage from './src/assets/beach.jpg';

export default class App extends React.Component {

  state = {
    places: []
  }

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return{
        places: prevState.places.concat({
          key: Math.random().toString(36).substr(2, 9),
          name: placeName,
          image: placeImage
        }),
      };
    });
  }

  placeDeletedHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key;
        })
      };
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Awesome Places</Text>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />

        <PlaceList places={this.state.places} onItemDeleted={this.placeDeletedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  welcome: {
    fontSize: 17,
  },
});
