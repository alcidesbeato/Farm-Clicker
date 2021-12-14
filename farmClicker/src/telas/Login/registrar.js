import React, { useEffect, useState } from 'react'
import { Image, View, TextInput, StyleSheet, Dimensions} from 'react-native'

import { useNavigation } from '@react-navigation/native';

import FundoInicial from '../../componentes/FundoInicial';
import Madeira from'../../../assets/madeira.png';
import titulo from'../../../assets/titulo.png';

import Texto from '../../componentes/Texto'

import Botao from '../../componentes/Botao/Botao'
import { getInstance } from '../../api';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
var login;
var senha;

export default function Registrar(){
    const navigation = useNavigation();
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
         console.log('login', login);
         console.log('senha', senha);
         navigation.addListener('focus',()=>setLoad(!Load))
    },[Load, navigation])

    useEffect(()=>{
        postApi();
    })

    const usuario = {
        name: login,
        senha: senha,
        quant_abelha: 0,
        quant_camarao: 0,
        quant_cavalo: 0,
        quant_galinhas: 0,
        quant_girafa: 0,
        quant_lontra: 0,
        quant_ovelha: 0,
        quant_peixe: 0,
        quant_porco: 0,
        quant_vaca: 0,
        reais: 0,
        upgrade_abelha: 0,
        upgrade_camarao: 0,
        upgrade_cavalo: 0,
        upgrade_galinhas: 0,
        upgrade_girafa: 0,
        upgrade_lontra: 0,
        upgrade_ovelha: 0,
        upgrade_peixe: 0,
        upgrade_porco: 0,
        upgrade_vaca: 0,
    }
    async function postApi(){
        const {data} = await (await instance).post('/api/usuarios', usuario);
        console.log('data', data);
    }

    
    function criarUsuario(){
        //postApi()
        console.log('ok');
        navigation.goBack()
    }
    
    return <>
        <FundoInicial/>
        <Image source={titulo} style={estilos.titulo}/>
        <View style={estilos.view}>
            <Image source={Madeira} style={estilos.madeira}/>
            <View style={estilos.textos}>
                <Texto style={estilos.createAccount}>Create Account</Texto>
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
                <TextInput
                    placeholder='Confirm Password' 
                    secureTextEntry 
                    style={[estilos.textInput,{marginTop:15}]}
                />
                <View style={estilos.viewBotao}>  
                    <Botao valor='Register'  acao={()=>criarUsuario()}/>
                    <Botao valor='Go Back'  style = {{marginTop:10}}  acao={()=>navigation.goBack()}/>
                </View>
            </View>
        </View>
        
    </>
}

const estilos = StyleSheet.create({
    madeira: {
        position: 'absolute',
        marginLeft: height *0.03,
        opacity: 0.75
    },
    iconeLogin:
    {
        position:"absolute",
        marginLeft: height *0.17,
        marginTop: 15,
    },
    view:{
        marginTop: width * 0.55,
    },
    textos: {
        position: "absolute",
        flexDirection: "column",
    },
    textInput:
    {
        marginTop : width * 0.2,
        marginLeft: height *0.13,
        fontFamily: "MontserratAlternatesBold", 
        fontWeight:"normal",
        height: 40,
        width: 200,
        backgroundColor: "#F9EFEF",
        borderRadius: 25,
        padding:10
    },
    titulo: {
        marginTop: width * 0.30,
        marginLeft: height *0.1,
        position:"absolute",
    },
    botao: {
        
    },
    viewBotao: {
        flexDirection: "column",
        marginTop : width * 0.15,
    }, 
    createAccount: {
        position:"absolute",
        marginTop : width * 0.1,
        marginLeft: height *0.16,
        fontWeight: "bold",
        fontSize: 20,
    }
})