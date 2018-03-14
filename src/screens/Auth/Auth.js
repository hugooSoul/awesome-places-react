import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
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
            <Button title="Switch to Login" />
            <View style={styles.inputContainer}>
              <DefaultInput placeholder="Username" style={styles.input} />
              <DefaultInput placeholder="Password" style={styles.input} />
              <DefaultInput placeholder="Confirm Password" style={styles.input} />
            </View>
            <Button title="Login" onPress={this.loginHandler} />
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
