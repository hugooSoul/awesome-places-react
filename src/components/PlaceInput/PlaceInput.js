import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';

const PlaceInput = props => (
  <DefaultInput
    placeholder="An awesome place"
    value={props.placeName}
    onChangeText={props.onChangeText} />
);

export default PlaceInput;
