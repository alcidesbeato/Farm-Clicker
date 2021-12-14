import React, {useEffect} from 'react'
import { Image, View, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import {
    AdMobBanner,
    AdMobInterstitial,
  } from 'expo-ads-admob';

import botaoSair from '../../../assets/botaoSair.png';
import luck from '../../../assets/luck.png'
import Fundo from '../../componentes/Fundo';
import MadeiraTopo  from '../../componentes/MadeiraTopo';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

import { useNavigation } from '@react-navigation/native';

export default function VerAd(){
    const navigation = useNavigation()

      useEffect(()=>{

          async function loadAd(){
              AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
              InterstitalAd();
          }
          loadAd();
        
      }, []);
        
          async function InterstitalAd(){
              await AdMobInterstitial.requestAdAsync({servePersonalizedAds: true});
              await AdMobInterstitial.showAdAsync();
          }   

    return <>
    <Fundo/>
    <MadeiraTopo/>
    <Image source={luck} style={estilos.luck}/>
    <TouchableOpacity onPress={()=>navigation.navigate('Farm')} style={estilos.touchable}>
        <Image source={botaoSair} style={estilos.botaoSair}/>
    </TouchableOpacity>
    <View style={estilos.container}>    
            <AdMobBanner
                bannerSize="smartBannerPortrait"
                adUnitID="ca-app-pub-3940256099942544/6300978111"
                setTestDeviceIDAsync
                servePersonalizedAds // true or false
                //onDidFailToReceiveAdWithError={this.bannerError} 
            />
    </View>
    </>
}

const estilos = StyleSheet.create({
    fundo: {
        position: "absolute",
    }, 
    touchable: {
        position: "absolute",
        width: 75,
        height: 75,
        //backgroundColor: "blue",
        marginTop: height*0.01,
        marginLeft: width*0.8, 
    },
    botaoSair: {
        position: "absolute",
        width: 75,
        height: 75,
    },
    container: {
        position: "absolute",
        bottom: 0,
    },
    luck: {
        position: "absolute",
        width: 75,
        height: 75,
        marginTop: width*0.075,
        marginLeft: height*0.2,
    },
})
