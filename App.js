import React, { useState } from "react";
import {LoginScreen} from "./Screens/auth/LoginScreen";
import {RegistrationScreen} from "./Screens/auth/RegistrationScreen";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  ImageBackground,
  View,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';


const  imageBg=require('./Source/Photo_BG.png')

export default function App() { 
  const [activeScreen, setActiveScreen] = useState(0);

  const changeScreen = (value) => { 
    setActiveScreen(value)
  }


  return (
    <TouchableWithoutFeedback onPress={ Keyboard.dismiss}>
      <View style={s.container }>
        <ImageBackground source={imageBg} style={s.imageBg}>

          {activeScreen === 0 ?
            < RegistrationScreen changeScreen={changeScreen} /> :
            <LoginScreen changeScreen={ changeScreen} />}

        </ImageBackground>
        <StatusBar  style="auto"/>
      </View>

    </TouchableWithoutFeedback>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageBg: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
  },
});
