import React from 'react';

import { StyleSheet, Text, SafeAreaView,StatusBar } from 'react-native';
import Game from './src/telas/Game'
import Shop from './src/telas/Shop/shop'
import Settings from './src/telas/Settings/settings'
import Login from './src/telas/Login/login'
import Farm from './src/telas/Game/index'

import Registrar from './src/telas/Login/registrar'
import VerAd from './src/telas/Ad/ad'

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import {
  useFonts,
  MontserratAlternates_400Regular,
  MontserratAlternates_700Bold,
  MontserratAlternates_600SemiBold_Italic,
} from '@expo-google-fonts/montserrat-alternates';

import AppLoading from 'expo-app-loading';

import { Routes } from './src/routes'

export default function App() {

  const [fontCarregada] = useFonts({
    "MontserratAlternatesRegular": MontserratAlternates_400Regular,
    "MontserratAlternatesBold": MontserratAlternates_700Bold,
    "MontserratAlternatesItalic": MontserratAlternates_600SemiBold_Italic,
  })
  if(!fontCarregada)
  {
    return <AppLoading/>
  }
  return (
    <SafeAreaView style = {{flex:1}}>
      {/* <Farm {...mocks}/> */}
      {/* <Settings/> */}
      {/* <Shop{...mocks}/> */}
      {/* <Registrar/> */}
      {/* <VerAd/> */}
      <Routes />
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
}


