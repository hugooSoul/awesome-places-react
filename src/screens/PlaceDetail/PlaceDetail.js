import React from 'react';
import { StyleSheet, View, Image, Text, Button, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const PlaceDetailScreen = props => {

  return (
    <View style={styles.container}>
      <View>
        <Image source={props.selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={props.onItemDeleted}>
          <View style={styles.buttonDelete}>
            <Icon size={30} name="ios-trash-outline" color="red" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    marginRight: 22,
    marginLeft: 22
  },
  placeImage: {
    width: '100%',
    height: 200
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28
  },
  buttonDelete: {
    alignItems: "center",
  },
  buttonClose: {
    alignItems: "center",
  }
});

export default PlaceDetailScreen;
