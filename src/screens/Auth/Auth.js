import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import ButtonWithBackground from '../../components/UI/Button/ButtonWithBackground';
import DefaultButton from '../../components/UI/Button/DefaultButton';
import backgroundImage from '../../assets/beach.jpg';

class AuthScreen extends Component {

  loginHandler = () => {
    startMainTabs();
  }

  render () {
    return(
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
            <MainText>
              <HeadingText>Please Log In</HeadingText>
            </MainText>
            <DefaultButton onPress={() => alert("Hello")}>Switch to Login</DefaultButton>
            <View style={styles.inputContainer}>
              <DefaultInput placeholder="Username" style={styles.input} />
              <DefaultInput placeholder="Password" style={styles.input} />
              <DefaultInput placeholder="Confirm Password" style={styles.input} />
            </View>
            <ButtonWithBackground onPress={this.loginHandler} color={'#379392'}>Login</ButtonWithBackground>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: '#eee',
    borderColor: '#bbb'
  },
  backgroundImage: {
    width: '100%',
    flex: 1
  }
});

export default AuthScreen;
