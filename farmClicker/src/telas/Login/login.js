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
import { getInstance } from '../../api';

var login ;
var senha ;


verificaTexto = (text)=>
{
    
}

export default function Login(){
    const navigation = useNavigation()
    const instance = getInstance();

    const [Load,setLoad] = useState(true);
    const setLogin = (text) =>
    {
        setLoad(!Load)
        login = text;
    }
    const setSenha = (text) =>
    {
        setLoad(!Load);
        senha = text;
    }
     
     useEffect(()=>{
         //Chamada de outras funções
         console.log('login',login);
         console.log('senha',senha);
         navigation.addListener('focus',()=>setLoad(!Load))
         },[Load, navigation])
    
         
    async function checkUser(login,senha){
        const {data} = await (await instance).get('/api/usuarios/check', {params: login,senha})
        console.log('data', data);
        return data;
    }
    
    function verificarLogin(){
        const check = checkUser(login,senha);
        if(check==null){
            console.log('usuario nao encontrado')
        }else{
         console.log('ok');
         navigation.navigate('FarmNavigator')
        }
     }

    //on click botao login verifica se o usuario existe no banco get(passando name)
    /*useEffect(()=>{
        checkUser(login,senha);
    })*/
    //   useEffect(()=>{

    //       async function loadAd(){
    //           AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
    //           InterstitalAd();
    //       }
    //       loadAd();
        
    //   }, []);
        
    //       async function InterstitalAd(){
    //           await AdMobInterstitial.requestAdAsync({servePersonalizedAds: true});
    //           await AdMobInterstitial.showAdAsync();
    //       }   

    return <>
        <FundoInicial/>
        <Image source={titulo} style={estilos.titulo}/>
        <View style={estilos.view}>
            <Image source={Madeira} style={estilos.madeira}/>
            <Image source={iconeLogin} style={estilos.iconeLogin}/>
            <View style={estilos.textos}>
                <TextInput
                    placeholder='Login' 
                    style={estilos.textInput}
                    onChangeText = {(login) => login = setLogin(login)}
                    value = {login}
                />
                <TextInput
                    placeholder='Password' 
                    secureTextEntry
                    style={[estilos.textInput,{marginTop:15}]}
                    onChangeText = {(senha) => setSenha(senha)}
                    value = {senha}
                />
                
                <View style={estilos.viewBotao}>  
                    <Botao valor='Enter' acao={()=> navigation.navigate('FarmNavigator') }  acao2={login}/>
                    <Botao valor='Sign Up' style = {{marginTop:10}} acao={()=>navigation.navigate('Registrar')} />
                </View>
            </View>
        </View>
        <View style={estilos.container}>    
            {/* <AdMobBanner
                bannerSize="smartBannerPortrait"
                adUnitID="ca-app-pub-3940256099942544/6300978111"
                setTestDeviceIDAsync
                servePersonalizedAds // true or false
                //onDidFailToReceiveAdWithError={this.bannerError} 
            /> */}
        </View>
        
    </>
}

