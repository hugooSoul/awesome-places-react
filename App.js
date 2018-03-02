import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
//import placeImage from './src/assets/beach.jpg';

export default class App extends React.Component {

  state = {
    places: [],
    selectedPlace: null
  }

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return{
        places: prevState.places.concat({
          key: Math.random().toString(36).substr(2, 9),
          name: placeName,
          image: {
            uri: "https://media-cdn.tripadvisor.com/media/photo-s/0e/85/48/e6/seven-mile-beach-grand.jpg"
          }
        }),
      };
    });
  }

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });
  }

  placeDeletedHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  }

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Awesome Places</Text>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler} />
        <PlaceInput
          onPlaceAdded={this.placeAddedHandler} />

        <PlaceList
          places={this.state.places}
          onItemSelected={this.placeSelectedHandler} />
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
