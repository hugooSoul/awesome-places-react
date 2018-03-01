import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

export default class App extends React.Component {

  state = {
    places: []
  }

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return{
        places: prevState.places.concat(placeName),
      };
    });
  }

  placeDeletedHandler = index => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place, i) => {
          return i !== index;
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
