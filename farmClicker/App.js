import React from 'react';

import { StyleSheet, Text, SafeAreaView,StatusBar } from 'react-native';
import Game from './src/telas/Game'
import Shop from './src/telas/Shop/shop'
import Settings from './src/telas/Settings/settings'


import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import {
  useFonts,
  MontserratAlternates_400Regular,
  MontserratAlternates_700Bold,
} from '@expo-google-fonts/montserrat-alternates';

export default function App() {

  const [fontCarregada] = useFonts({
    "MontserratAlternatesRegular": MontserratAlternates_400Regular,
    "MontserratAlternatesBold": MontserratAlternates_700Bold,
  })

  return (
    <SafeAreaView style = {{flex:1}}>
      <Settings/>
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
}


