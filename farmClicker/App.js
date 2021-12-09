import React from 'react';

import { StyleSheet, Text, SafeAreaView,StatusBar } from 'react-native';
import Game from './src/telas/Game'

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
      <Game/>
      <StatusBar style="auto" />
      <Text> OLA TESTE</Text>
    </SafeAreaView>
  );
}


