import React from 'react';
import { StyleSheet, Modal, View, Image, Text, Button, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const PlaceDetail = props => {
  let modalContent = null;

  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image source={props.selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    );
  }

  return (
    <Modal onRequestClose={props.onModalClosed} visible={props.selectedPlace !== null} animationType="slide">
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <TouchableOpacity onPress={props.onItemDeleted}>
            <View style={styles.buttonDelete}>
              <Icon size={30} name="md-trash" color="red" />
            </View>
          </TouchableOpacity>
          <Button title={'Close'} onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
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
    alignItems: "center"
  }
});

export default PlaceDetail;
