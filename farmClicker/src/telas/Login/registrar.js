import React from 'react'
import { Image, View, TextInput, StyleSheet, Dimensions} from 'react-native'

import { useNavigation } from '@react-navigation/native';

import FundoInicial from '../../componentes/FundoInicial';
import Madeira from'../../../assets/madeira.png';
import titulo from'../../../assets/titulo.png';

import Texto from '../../componentes/Texto'

import Botao from '../../componentes/Botao/Botao'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


export default function Registrar(){
    const navigation = useNavigation()
    return <>
        <FundoInicial/>
        <Image source={titulo} style={estilos.titulo}/>
        <View style={estilos.view}>
            <Image source={Madeira} style={estilos.madeira}/>
            <View style={estilos.textos}>
                <Texto style={estilos.createAccount}>Create Account</Texto>
                <TextInput
                    placeholder='Login' style={estilos.textInput}
                />
                <TextInput
                    placeholder='Password' secureTextEntry style={[estilos.textInput,{marginTop:15}]}
                />
                <TextInput
                    placeholder='Confirm Password' secureTextEntry style={[estilos.textInput,{marginTop:15}]}
                />
                <View style={estilos.viewBotao}>  
                    <Botao valor='Register'  acao={()=>navigation.goBack()}/>
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


