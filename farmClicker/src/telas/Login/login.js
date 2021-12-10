import React from 'react'
import { Image, View, TextInput, Button} from 'react-native'

import FundoInicial from '../../componentes/FundoInicial'
import Madeira from'../../../assets/madeira.png';
import iconeLogin from'../../../assets/iconeLogin.png';
import titulo from'../../../assets/titulo.png';

import Botao from '../../componentes/Botao/Botao'

import estilos from './estiloLogin';

import { useState } from 'react';


export default function Login(){

    
const [String,setString] = useState("Sign Up");


    return <>
        <FundoInicial/>
        <Image source={titulo} style={estilos.titulo}/>
        <View style={estilos.view}>
            <Image source={Madeira} style={estilos.madeira}/>
            <Image source={iconeLogin} style={estilos.iconeLogin}/>
            <View style={estilos.textos}>
                <TextInput
                    placeholder='Login' style={estilos.textInput}
                />
                <TextInput
                    placeholder='Password' style={[estilos.textInput,{marginTop:15}]}
                />
                <View style={estilos.viewBotao}>  
                    <Botao valor='Enter'/>
                    <Botao   valor = {String}  style = {{marginTop:10}}  />
                </View>
            </View>
        </View>
        
    </>
}


