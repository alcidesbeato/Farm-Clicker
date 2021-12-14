import React from 'react'
import { Image, View, TextInput, StyleSheet, Dimensions, TouchableOpacity, useEffect} from 'react-native'
import {
    AdMobBanner,
    AdMobInterstitial,
  } from 'expo-ads-admob';
import botaoSair from '../../../assets/botaoSair.png'
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
    <TouchableOpacity onPress={()=>navigation.navigate('Farm')}>
        <Image source={botaoSair} style={estilos.botaoSair}/>
    </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    botaoSair: {
        marginTop: 10,
        marginLeft: 10,
    },
})
