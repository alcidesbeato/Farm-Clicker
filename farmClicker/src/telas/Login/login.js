import React, {useState,useEffect} from 'react'

import { Image, View, TextInput, Alert, Button, StyleSheet} from 'react-native'

import FundoInicial from '../../componentes/FundoInicial'
import Madeira from'../../../assets/madeira.png';
import iconeLogin from'../../../assets/iconeLogin.png';
import titulo from'../../../assets/titulo.png';

import { useNavigation } from '@react-navigation/native';

import Botao from '../../componentes/Botao/Botao'

import {
    AdMobBanner,
    AdMobInterstitial,
  } from 'expo-ads-admob';

  import estilos from './estiloLogin';

var  login ;
var senha = "garros";


verificaTexto = (text)=>
{
    
}


export default function Login(){
    const navigation = useNavigation()

    const [Load,setLoad] = useState(true);
    setLogin = (text) =>
    {
        setLoad(!Load)
        login = text;
    }
     
     useEffect(()=>{
         //Chamada de outras funções
         //console.log(login);
         navigation.addListener('focus',()=>setLoad(!Load))
         },[Load, navigation])
         

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
        <FundoInicial/>
        <Image source={titulo} style={estilos.titulo}/>
        <View style={estilos.view}>
            <Image source={Madeira} style={estilos.madeira}/>
            <Image source={iconeLogin} style={estilos.iconeLogin}/>
            <View style={estilos.textos}>

                <View style={styles.container}>    
                    <AdMobBanner
                        bannerSize="fullBanner"
                        adUnitID="ca-app-pub-3940256099942544/6300978111"
                        setTestDeviceIDAsync
                        servePersonalizedAds // true or false
                        onDidFailToReceiveAdWithError={this.bannerError} 
                        />
                </View>

                <TextInput
                    placeholder='Login' 
                    style={estilos.textInput}
                    onChangeText = {(login) => login = setLogin(login)}
                    value = {login}
                />
            
                <TextInput
                    placeholder='Password' secureTextEntry style={[estilos.textInput,{marginTop:15}]}
                />
                
                <View style={estilos.viewBotao}>  
                    <Botao valor='Enter' acao={()=>navigation.navigate('FarmNavigator') }  acao2={login}/>
                    <Botao valor='Sign Up' style = {{marginTop:10}} acao={()=>navigation.navigate('Registrar')}  />
                </View>

            </View>
        </View>
        
    </>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginTop:30,
    },
  });

